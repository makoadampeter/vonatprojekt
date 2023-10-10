# Vonat Projektterv 2023

## 1. Összefoglaló 

Mai rohanó világunkban nagy szerepet játszik a mobilitás, ezért fontos a tömegközlekedés megvalósítása települések, városok és országok között. A projekt keretein belül egy vasúti közlekedéssel kapcsolatos weboldalt fejlesztünk, mely kilistázza a megfelelő járatokat, azok megállóhelyeit, valamint indulási és érkezési időpontjait. Célunk megkönnyíteni az útvonaltervezést, ezért figyelembe vesszük az útvonalak hosszát, vasúti pályák állapotát, megálló helyek számát, hogy a rendszer ezek függvényében a lehető legoptimálisabb útvonalat állítsa elő utazni kívánó felhasználóink számára.


## 2. A projekt bemutatása

Ez a projektterv a Vonat projektet mutatja be, amely 2023-09-20-től 2023-12-05-ig tart, azaz összesen 77 napon keresztül fog futni. A projekten hat fejlesztő fog dolgozni, az elvégzett feladatokat pedig négy alkalommal fogjuk prezentálni a megrendelőnek, annak érdekében, hogy biztosítsuk a projekt folyamatos előrehaladását.

### 2.1. Rendszerspecifikáció

A rendszernek képesnek kell lennie arra, hogy adott közlekedési eszköz (vonat) menetrendjét nyilvántartsa annak érdekében, hogy a felhasználók az indulási és érkezési időt, a megállót(hely) és a járat információit képesek legyenek lekérdezni. Ezenkívül a regisztráció és bejelentkezést követően “kedvenc” járatok mentését, opcionálisan email értésítést szolgáltasson.
Amennyiben rendelkezik a szükséges jogosultságokkal, járatok hozzáadását, hozzátartozó információk frissítését/módosítását, illetve törlését, valamint a felhasználók kezelését.
Minden funkció a megfelelő felhasználói jogosultság mellett használható, annak függvényében írható, olvasható vagy nem megtekinthető az adat.

### 2.2. Funkcionális követelmények

 - Felhasználók kezelése (admin, felhasználó) (CRUD) 
 - Felhasználói munkamenet megvalósítása több jogosultsági szinttel 
 - Járatok kezelése (CRUD) 
 - Megállók kezelése (CRUD) 
 - Email-es értésítés a járat indulása előtti megadott időben
 - Nyomtatható menetrend


### 2.3. Nem funkcionális követelmények

 - A kliens oldal böngészőfüggetlen legyen 
 - Reszponzív megjelenés

## 3. Költség- és erőforrás-szükségletek

Az erőforrásigényünk összesen 104 személynap, átlagosan 17 személynap/fő.

A rendelkezésünkre áll összesen 6 * 70 = 420 pont.

## 4. Szervezeti felépítés és felelősségmegosztás

A projekt megrendelője Dr. Kertész Attila. A Vonat projektet a projektcsapat fogja végrehajtani, amely hat fejlesztőből áll. A csapatban egyetemi hallgatók találhatók, akik többnyire pár éves egyetemi/középiskolai tapasztalattal rendelkeznek.

- Csíkos Martin Nándor (4 év szakgimnáziumi, 1 év egyetemi tapasztalat)
- Bíró Szabolcs László (4 év szakgimnáziumi, 1 év technikusi, 1 év egyetemi tapasztalat)
- Kovács János András (4 év szakgimnáziumi, 1 év technikusi, 1 év egyetemi tapasztalat)
- Makó Ádám Péter (4 év szakgimnáziumi, 1 év egyetemi tapasztalat)
- Patyi Péter (2 év egyetemi tapasztalat)
- Szajkó István (1 év egyetemi tapasztalat)

### 4.1 Projektcsapat

A projekt a következő emberekből áll:

| Név          | Pozíció          |   E-mail cím (stud-os)        |
|--------------|------------------|-------------------------------|
| Csíkos Martin Nándor | Projektmenedzser | h256461@stud.u-szeged.hu    |
| Bíró Szabolcs | Projekt tag      | h255485@stud.u-szeged.hu    |
| Makó Ádám   | Projekt tag      | h267424@stud.u-szeged.hu    |
| Szajkó István | Projekt tag      | h269397@stud.u-szeged.hu    |
| Kovács János András   | Projekt tag      | h160330@stud.u-szeged.hu    |
| Patyi Péter | Projekt tag      | h162761@stud.u-szeged.hu    |


## 5. A munka feltételei

### 5.1. Munkakörnyezet

A projekt a következő munkaállomásokat fogja használni a munka során:

 - Munkaállomások: 4 db, Windows (Windows 10 / Windows 11) operációs rendszerrel, 2 db, Linux (Ubuntu 23.04, Arch Linux) operációs rendszerrel
 - LG Gram 14 (CPU: i5-1135G7, RAM: 8 GB, GPU: Intel Iris Xe, OS: Ubuntu 23.04)
 - Lenovo IdeaPad 3 15ADA05 (CPU: AMD Ryzen 5 3500U, RAM: 12 GB, GPU: Radeon Vega Mobile Gfx × 8, OS: Arch Linux)
 - Acer Aspire 3 A315-53G-351H (CPU: i3-7020U, RAM: 8 GB, GPU: NVIDIA GeForce MX130, OS: Windows 10)
 - Lenovo ThinkPad T460 (CPU: i5-6300U, RAM: 8 GB, GPU: Intel HD Graphics 520, OS: Windows 10)
 - Dell Inspiron 3576 (CPU: i3-7020U, RAM 4 GB, GPU: AMD Radeon 520, OS: Windows 10)
 - Lenovo Legion 5 (CPU: Ryzen 5 5600H, RAM: 16 GB, GPU: NVIDIA GeForce RTX 3050 Ti, OS: Windows 11)

A projekt a következő technológiákat/szoftvereket fogja használni a munka során: 

 - DigitalOcean platformszolgáltatás a webalkalmazás hosztolásához
 - DigitalOcean által biztosított MySQL adatbázisszerver
 - XAMPP webszerver-szoftvercsomag
 - Docker konténerizáló platform
 - XAMPP és Docker által nyújtott MySQL adatbáziskezelő
 - JavaScript kliensoldali szkriptnyelv
 - PHP szerveroldali szkriptnyelv
 - Visual Studio Code kódszerkesztő
 - Maven szoftverprojekt menedzselő szoftver
 - Git verziókövető (GitLab)

### 5.2. Rizikómenedzsment

| Kockázat                                    | Leírás                                                                                                                                                                                     | Valószínűség | Hatás  |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|--------|
| Betegség                                  | Súlyosságtól függően hátráltatja vagy bizonyos esetekben teljes mértékben korlátozza a munkavégzőt, így az egész projektre kihatással van. Megoldás: a feladatok átcsoportosítása        | nagy       | erős |
| Kommunikációs fennakadás a csapattagokkal | A csapattagok között nem elégséges az információ áramlás, nem pontosan, esetleg késve vagy nem egyértelműen tájékoztatjuk egymást. Megoldás: még gyakoribb megbeszélések és ellenőrzések | kis        | erős |
| Extrém ZH időszak | Olyan időintervallum a szorgalmi időszak során, amikor jelentős mennyiségű tárgyból kell zárthelyi vizsgát írni, ami miatt csökkenhet a projektre fordítandó idő a vizsgákra való készülés prioritása miatt. Megoldás: a feladatok átcsoportosítása | nagy        | erős |
| Szoftver probléma | Előre nem láthatóan egy adott szoftver, vagy munkakörnyezet meghibásodása, ami az egyéni munkát befolyásolja. Megjavítása általában nem több, mint 1 nap. Megoldás: esetenként változik, ha kicsi a probléma, az adott fejlesztő megjavítja a hibát, és folytatja a feladatot, ha nagy, a feladatot át kell csoportosítani | kis        | közepes |
| Hardver probléma | A munkaállomás meghibásodik, nem lehet rajta folytatni a munkát. Megjavítása idő- és pénzigényes lehet. Megoldás: a feladat átcsoportosítása | kis        | erős |
| Határidővel való csúszás | 1, vagy több lehetséges probléma kimenetele lehet az, hogy az adott mérföldkőre nem készültek el feladatok, több idő kell a megvalósításukhoz, ami miatt a határidőn túl is foglalkozni kell a feladatokkal. Megoldás: a kihagyott, vagy félbehagyott feladatok minél hamarabbi befejezése határidőn túl, elkészítése | kis        | erős |
| Tag nem foglalkozik eleget a projekttel | A projekt egyik tagja önszántából nem csinál elég feladatot, nem fejezi be a már megkezdett feladatát, nem foglalkozik a feladatokkal annyit, mint amennyit a projekt megkíván. Megoldás: tag felszólítása, vagy feladatok átcsoportosítása | kis        | erős |

## 6. Jelentések

### 6.1. Munka menedzsment
A munkát Csíkos Martin Nándor koordinálja. Fő feladata, hogy folyamatosan egyeztessen a csapattagokkal az előrehaladásról és a fellépő problémákról, a megoldásban segítséget nyújt. További feladata a heti szinten tartandó csoportgyűlések időpontjának leszervezése, erről Discord platformon tájékoztatja a projektcsapatot.

### 6.2. Csoportgyűlések

A projekt hetente ülésezik, hogy megvitassák az azt megelőző hét problémáit, illetve hogy megbeszéljék a következő hét feladatait. A megbeszélésről minden esetben memó készül.

1. megbeszélés:
 - Időpont: 2023.09.30.
 - Hely: Online platformon (Discord)
 - Résztvevők: Csíkos Martin Nándor, Bíró Szabolcs, Makó Ádám, Szajkó István, Kovács János András, Patyi Péter
 - Érintett témák: A projektterv áttekintése, megvalósítandó feladatok összeírása, kitalálása, projekttervi feladatok kiosztása

2. megbeszélés:
 - Időpont: 2023.10.07.
 - Hely: Online platformon (Discord)
 - Résztvevők: Csíkos Martin Nándor, Bíró Szabolcs, Makó Ádám, Szajkó István, Kovács János András, Patyi Péter
 - Érintett témák: A projektterv áttekintése, megvalósítandó feladatok kiosztása időtartam becslésre, fontosságuk alapján sorba rendezése, PPT prezentáció kezdeti megbeszélése

3. megbeszélés:
 - Időpont: 2023.10.08.
 - Hely: Online platformon (Discord)
 - Résztvevők: Csíkos Martin Nándor, Bíró Szabolcs, Makó Ádám, Szajkó István, Kovács János András, Patyi Péter
 - Érintett témák: A projektterv áttekintése, feladatlista kiegészítése új feladatokkal, feladatok személynapjainak becslése, fontosságuk alapján sorba rendezése, feladatok kiosztása, Gantt diagram elkészítése

### 6.3. Minőségbiztosítás

Az elkészült terveket a terveken nem dolgozó csapattársak közül átnézik, hogy megfelel-e a specifikációnak és az egyes diagramtípusok összhangban vannak-e egymással. A meglévő rendszerünk helyes működését a prototípusok bemutatása előtt a tesztelési dokumentumban leírtak végrehajtása alapján ellenőrizzük és összevetjük a specifikációval, hogy az elvárt eredményt kapjuk-e. További tesztelési lehetőségek: unit tesztek írása az egyes modulokhoz vagy a kód közös átnézése (code review) egy, a vizsgált modul programozásában nem résztvevő csapattaggal. Szoftverünk minőségét a végső leadás előtt javítani kell a rendszerünkre lefuttatott kódelemzés során kapott metrikaértékek és szabálysértések figyelembevételével.
Az alábbi lehetőségek vannak a szoftver megfelelő minőségének biztosítására:
- Specifikáció és tervek átnézése (kötelező)
- Teszttervek végrehajtása (kötelező)
- Unit tesztek írása (választható)
- Kód átnézése (választható)

### 6.4. Átadás, eredmények elfogadása

A projekt eredményeit a megrendelő, Dr. Kertész Attila fogja elfogadni. A projektterven változásokat csak a megrendelő írásos engedélyével lehet tenni. A projekt eredményesnek bizonyul, ha specifikáció helyes és határidőn belül készül el. Az esetleges késések pontlevonást eredményeznek. 
Az elfogadás feltételeire és beadás formájára vonatkozó részletes leírás a következő honlapon olvasható: https://okt.inf.szte.hu/rf1/

### 6.5. Státuszjelentés

Minden mérföldkő leadásnál a projekten dolgozók jelentést tesznek a mérföldkőben végzett munkájukról a a megadott sablon alapján. A gyakorlatvezetővel folytatott csapatmegbeszéléseken a csapat áttekintik és felmérik az eredményeket és teendőket. Továbbá gazdálkodnak az erőforrásokkal és szükség esetén a megrendelővel egyeztetnek a projektterv módosításáról.

## 7. A munka tartalma

### 7.1. Tervezett szoftverfolyamat modell és architektúra

A szoftver fejlesztése során az agilis fejlesztési modellt alkalmazzuk, mivel a fejlesztés során nagy hangsúlyt fektetünk a folyamatos kommunikcióra. A fejlesztés során a szoftver specifikációi rugalmasan vátozhatnak, és ezzel a módszertannal tudunk a leggyorsabban alkalmazkodni az új elvárásokhoz.

A webalkalmazás az MVC (modell-view-controller) felépítést követi, a szerver és a kliens függetlenek, csupán API végpontok segítségével kommunikálnak.


### 7.2. Átadandók és határidők

A főbb átadandók és határidők a projekt időtartama alatt a következők:


| Szállítandó |                 Neve                                                        |   Határideje  |
|:-----------:|:---------------------------------------------------------------------------:|:-------------:|
|      D1     |      Projektterv és Gantt chart, prezentáció, egyéni jelentés               | 2023-10-10  |
|    P1+D2    |      UML, adatbázis- és képernyőtervek, prezentáció, egyéni jelentés        | 2023-10-24  |
|    P1+D3    |      Prototípus I. és tesztelési dokumentáció, egyéni jelentés              | 2023-11-14  |
|    P2+D4    |      Prototípus II. és frissített tesztelési dokumentáció, egyéni jelentés  | 2023-12-05  |

## 8. Feladatlista

A következőkben a tervezett feladatok részletes összefoglalása található.


### 8.1. Projektterv (1. mérföldkő)

Ennek a feladatnak az a célja, hogy megvalósításhoz szükséges lépéseket, az erőforrásigényeket, az ütemezést, a felelősöket és a feladatok sorrendjét meghatározzuk, majd vizualizáljuk Gantt diagram segítségével.

Részfeladatai a következők:

#### 8.1.1. Projektterv kitöltése

Felelős: Mindenki

Tartam:  14 nap

Erőforrásigény:  1 személynap/fő


#### 8.1.2. Bemutató elkészítése

Felelős: Bíró Szabolcs

Tartam:  3 nap

Erőforrásigény:  2 személynap


### 8.2. UML és adatbázis- és képernyőtervek (2. mérföldkő)

Ennek a feladatnak az a célja, hogy a rendszerarchitektúrát, az adatbázist és webalkalmazás kinézetét megtervezzük.

Részfeladatai a következők:

#### 8.2.1. Class diagram

Felelős: Bíró Szabolcs

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.2.2. Egyed-kapcsolat diagram adatbázishoz

Felelős: Szajkó István

Tartam:  6 nap

Erőforrásigény:  3 személynap

#### 8.2.3. Package diagram

Felelős: Patyi Péter

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 8.2.4. Sequence diagram

Felelős: Kovács János András

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.2.5. Képernyőtervek

Felelős: Csíkos Martin Nándor

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.2.6. Use Case diagram

Felelős: Makó Ádám

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.2.7. Bemutató elkészítése

Felelős: Patyi Péter

Tartam:  5 nap

Erőforrásigény:  2 személynap


### 8.3. Prototípus I. (3. mérföldkő)

Ennek a feladatnak az a célja, hogy egy működő prototípust hozzunk létre, ahol a vállalt funkcionális követelmények nagy része már prezentálható állapotban van.

Részfeladatai a következők:

#### 8.3.1 Felhasználók adatbázis létrehozása

Felelős: Csíkos Martin Nándor

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.2 Menetrend adatbázis létrehozása

Felelős: Makó Ádám

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 8.3.3 Felhasználók adatbázis feltöltése adatokkal

Felelős: Szajkó István

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.4 Menetrend adatbázis feltöltése

Felelős: Makó Ádám

Tartam:  2 nap

Erőforrásigény:  1 személynap

#### 8.3.5 Header - footer

Felelős: Makó Ádám

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.6 Saját felhasználói profil megtekintése (frontend)

Felelős: Kovács János András

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.3.7 Menetrend alapján lekérdezés (backend)

Felelős: Csíkos Martin Nándor

Tartam:  8 nap

Erőforrásigény:  5 személynap

#### 8.3.8 Járatok alapján lekérdezés (backend)

Felelős: Bíró Szabolcs

Tartam:  7 nap

Erőforrásigény:  5 személynap

#### 8.3.9 Regisztráció (frontend + backend)

Felelős: Patyi Péter

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 8.3.10 Bejelentkezés (frontend + backend)

Felelős: Patyi Péter

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.3.11 Admin felület (backend)

Felelős: Csíkos Martin Nándor

Tartam:  7 nap

Erőforrásigény:  4 személynap

#### 8.3.12 Admin felület (frontend)

Felelős: Bíró Szabolcs

Tartam:  8 nap

Erőforrásigény:  3 személynap

#### 8.3.13 Menetrend alapján lekérdezés (frontend))

Felelős: Kovács János András

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.3.14 Járatok alapján lekérdezés (frontend)

Felelős: Szajkó István

Tartam:  6 nap

Erőforrásigény:  3 személynap

#### 8.3.15 Tesztelési dokumentum elkészítése

Felelős: Mindenki

Tartam:  4 nap

Erőforrásigény:  1 személynap/fő

#### 8.3.16 Bemutató elkészítése

Felelős: Kovács János András

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.17 Prototípus kitelepítése éles környezetbe

Felelős: Csíkos Martin Nándor

Tartam:  3 nap

Erőforrásigény:  1 személynap

### 8.4. Prototípus II. (4. mérföldkő)

Ennek a feladatnak az a célja, hogy az előző mérföldkő hiányzó funkcióit pótoljuk, illetve a hibásan működő funkciókat és az esetlegesen felmerülő új funkciókat megvalósítsuk. Továbbá az alkalmazás alapos tesztelése is a mérföldkőben történik az előző mérföldkőben összeállított tesztesetek alapján.

Részfeladatai a következők:

#### 8.4.1 Kapcsolat (frontend + backend)

Felelős: Szajkó István

Tartam:  7 nap

Erőforrásigény:  3 személynap

#### 8.4.2 Javított minőségű prototípus a korábbi hiányzó funkciókkal

Felelős: Patyi Péter

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 8.4.3 Email-es értésítés

Felelős: Makó Ádám

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.4.4 Felhasználói munkamenet tesztelése

Felelős: Kovács János András

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.4.5 Főoldal (frontend)

Felelős: Kovács János András

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.4.6 Felhasználói profil szerkesztése (backend)

Felelős: Makó Ádám

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.4.7 Megállók tesztelése

Felelős: Patyi Péter

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.4.8 Járatok tesztelése

Felelős: Szajkó István

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.4.9 About us (frontend)

Felelős: Makó Ádám

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 8.4.10 Javított minőségű prototípus javított funkciókkal

Felelős: Szajkó István

Tartam:  7 nap

Erőforrásigény:  3 személynap

#### 8.4.11 Email-es értésítés tesztelés

Felelős: Kovács János András

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.4.12 Bemutató elkészítése

Felelős: Makó Ádám

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.4.13 Felhasználói profil szerkesztése (frontend)

Felelős: Patyi Péter

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 8.4.14 Nyomtatási kép (menetrend és járat lekérdezések oldal)

Felelős: Bíró Szabolcs

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.4.15 Prototípus kitelepítésének frissítése

Felelős: Csíkos Martin Nándor

Tartam:  3 nap

Erőforrásigény:  1 személynap

## 9. Részletes időbeosztás

![image](./MINTA-gantt-diagram.png)

```
Ide kell berakni a Gantt diagramot, amely a 9. fejezetben található részfeladatokat tartalmazza felelős/tartam bontásban.
```

## 10. Projekt költségvetés


### 10.1. Részletes erőforrásigény (személynap)


| Név                    |   M1  |   M2  |   M3 |   M4  | Összesen |
|------------------------|-------|-------|------|-------|----------|
| Csíkos Martin Nándor |  1  |  2  | 13 |  1  |   17   |
| Bíró Szabolcs        |  3  |  3  | 9  |  2  |   17   |
| Makó Ádám            |  1  |  2  |  6 |  8  |   17   |
| Kovács János András  |  1  |  3  |  8 |  6  |   18   |
| Szajkó István        |  1  |  3  |  5 |  8  |   17   |
| Patyi Péter          |  1  |  4  |  7 |  6  |   18   |


### 10.2. Részletes feladatszámok

| Név                    |   M1  |   M2  |   M3 |   M4 | Összesen |
|------------------------|-------|-------|------|------|----------|
| Csíkos Martin Nándor |  1  |  1  |  5 |  1 |    8   |
| Bíró Szabolcs        |  2  |  1  |  3 |  1 |    7   |
| Makó Ádám            |  1  |  1  |  4 |  4 |   10   |
| Kovács János András  |  1  |  1  |  4 |  3 |    9   |
| Szajkó István        |  1  |  1  |  3 |  3 |    8   |
| Patyi Péter          |  1  |  2  |  3 |  3 |    9   |

### 10.3. Részletes költségvetés

| Név                                 | M1      | M2       | M3       | M4       | Összesen  |
|-------------------------------------|---------|----------|----------|----------|-----------|
| Maximálisan megszerezhető pontszám  |  (7)    | (20)     | (35)     |  (28)    | 100% (70) |
| Csíkos Martin Nándor                | 4       | 15       | 35       |  16      | 70        |
| Bíró Szabolcs`                      | 7       | 15       | 30       |  18      | 70        |
| Makó Ádám`                          | 4       | 15       | 30       |  21      | 70        |
| Kovács János András                 | 4       | 15       | 30       |  21      | 70        |
| Szajkó István                       | 4       | 15       | 30       |  21      | 70        |
| Patyi Péter                         | 4       | 20       | 26       |  20      | 70        |

Szeged, 2023-10-10.
