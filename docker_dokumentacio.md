### Docker docksi

Feltételezem, hogy a Dockert Linux-szal akarod használni. Windowson nem tudom hogy vannak a dolgok, annak majd nézzetek utána (de legegyszerűbb ha Ubuntus WSL-t használtok Windowson, akkor 1/1 működni fog minden ami itt le van írva)

Használat előtt legyen feltelepítve a Docker (vagy az Engine, vagy a Desktop, desktoppal még nem próbálkoztam, de ott egyszerűbb az egész)

## Telepítés:
    - Debian: https://docs.docker.com/engine/install/debian/
    - Arch: `sudo pacman -S docker` (kell egy docker compose plugin is, ez Docker Desktoppal alapból fent lesz, ha az esetleg nem települne fel, akkor annak telepítése (nem biztos hogy működik, nem próbáltam): `sudo pacman -S docker-compose`)


## Használat:
    - (Először klónozd le a repot (git clone))
    - Lépj bele a létrehozott git repos mappába (cd vonat)
    - A mappában lesz egy Dockerfile, és egy docker-compose.yml fájl. A docker-compose-t fogjuk használni
    - környezet futtatása: `docker compose up --build` (Ez elindítja a weboldalt és az adatbázist + phpmyadmint)
    - környezet leállítása: `docker compose down` VAGY `ctrl+c`
        - Hasznos paraméter: -d (`docker compose up -d --build`)
            - Ekkor a docker compose a háttérben fog futni (= használhatod tovább a shellt az adott ablakban)
            - Leállításához a docker compose down commandot kell használni

Az adatbásist a localhost:8080-as URL-en, a weboldalt a localhost:3000-es URL-en éred el.

A workflow ugyanaz mint XAMPP-nél (XAMPP: elindítod a szervert + adatbázist, kódolsz, végén pedig leállítod a szervert + adatbázist, Docker: elindítod a compose környezetet, kódolsz, végén leállítod)

## Működése

Ezt nem fontos már elolvasni és megérteni, de ha valaki kíváncsi, leírom ide.

Dockerfile --> utasítássorozat, hogy hogyan fog működni a backendünk

    - FROM node:21-alpine --> lekérjük a Docker Hubról a 21-es NodeJS változatot, ami Alpine Linuxra van tervezve (kis méret, lightweight verzió)

    - WORKDIR /app --> (working directory): a mappa, amiben a Docker fog dolgozni, az a konténerében a /app mappa lesz (lényegében megadjuk hogy milyen mappát hozzon létre a Docker, amiben dolgozni fog)

    - COPY . . --> átmásoljuk a lokális fájlokat (1. pont) a Docker working directoryjába (2. pont). A lokális fájlokat a Dockerfile helyétől függően másolja át (ha belerakod a Dokumentacio mappába, akkor azokat a fájlokat másolja)

    - RUN npm install --> lefuttatjuk az npm install commandot (amivel letöltjük az összes olyan package-et, ami a package.json-ben megtalálható)

    - EXPOSE 3000 --> A 3000-es porton fogjuk elérni kívülről az oldalt.

    - CMD ["npm", "start"] --> megadjuk, hogy az utolsó utasítás (CMD) az az npm start legyen (= elindítjuk a szervert)

Ezt a Dockerfile-t viszont le is kell buildelni (amiből végül Image lesz), mert önmagában nem fog csinálni semmit. A docker composenál a --build ezt fogja megtenni. (A buildet meg a futtatását nem írom le, bonyolult + nem praktikális lokális fejlesztésnél, a docker-compose fájlban minden le van írva amit nekünk itt manuálisan kellene csinálni)

docker-compose.yml --> lényegében lebuildelt Dockerfileok (image-ek) többsége.
    - 3 féle image-el dolgozunk:
        - mysql
        - phpmyadmin
        - web (= a mi Dockerfileunk), benne található egy build: ., ami azt mondja, hogy a Dockerfile-t használja image-nek
    - Ezeknek container nevet adunk (container: jelenleg futó, vagy futtatott image), hogy meg tudjuk különböztetni őket
    - A ports résznél (pl. 8080:80) a : előtti rész az az, amelyik portra fogunk csatlakozni az URL-en (= Dockerfileban az EXPOSE), a : utáni pedig az a port, ami a belső rendszerben fut, rá nem tudunk csatlakozni.
        - a : előtti port lényegében bármi lehet, amelyik portot jelenleg nem használjuk
    - Egy volume pedig egy adott tároló hely, ahol eltároljuk az adatokat (nélküle pl. az adatbázis nem tárolna el semmit)
