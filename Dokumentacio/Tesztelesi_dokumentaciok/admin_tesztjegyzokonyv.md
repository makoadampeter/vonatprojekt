# Tesztjegyzőkönyv-`Admin felület`

Az alábbi tesztdokumentum a `Vonat` projekthez tartozó `8.3.11. Admin felület (backend)` funkcióihoz készült. Felelőse: `Kovács János András` 

## 1. Teszteljárások (TP)

### 1.1. Új megálló hozzáadása
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Új megálló hozzáadása az SQL adatbázishoz
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `Megálló neve` szövegbeviteli mezőbe írjuk be a `TEXT` szöveget
    2. lépés: Nyomjuk meg a `Hozzáad` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a hozzáadás, és az adat megjelenik a stops SQL táblában.

### 1.2. Új járat hozzáadása 1 megállóval
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: Új járat hozzáadása az SQL adatbázishoz 1 megállóval
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `JáratID` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: Az `Megálló neve` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Az `00 perc` szövegbeviteli mezőbe írjuk be a `TEXT3` szöveget
    4. lépés: Nyomjuk meg a `Járat hozzáadása` gombot
    5. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a hozzáadás, és az adat megjelenik a line_names és line_stops SQL táblában.

### 1.3. Új járat hozzáadása több megállóval
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: Új járat hozzáadása az SQL adatbázishoz több megállóval
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `JáratID` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: Az `Megálló neve` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Az `00 perc` szövegbeviteli mezőbe írjuk be a `TEXT3` szöveget
    4. lépés: Nyomjuk meg a `Megálló hozzáadás` gombot
    5. lépés: Az `Megálló neve` szövegbeviteli mezőbe írjuk be a `TEXT4` szöveget
    6. lépés: Az `00 perc` szövegbeviteli mezőbe írjuk be a `TEXT5` szöveget
    7. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a hozzáadás, és az adat megjelenik a line_names és line_stops SQL táblában.

### 1.4. Megálló módosítása
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Megálló módosítása az SQL adatbázisból
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `Jelenlegi megállónév` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: Az `Új megállónév` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Nyomjuk meg a `Módosít` gombot
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a módosítás, és az adat frissül a stops SQL táblában.

### 1.5. Járat módosítása
- Azonosító: TP-05
- Tesztesetek: TC-01
- Leírás: Megálló módosítása az SQL adatbázisból
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `Járat neve` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    3. lépés: Nyomjuk meg a `ID lekérés` gombot
    2. lépés: Az `INPUT2` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Nyomjuk meg a `Módosít` gombot
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a módosítás, és az adat frissül a stops SQL táblában.

### 1.6. Járat törlése
- Azonosító: TP-06
- Tesztesetek: TC-01
- Leírás: Megálló módosítása az SQL adatbázisból
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `JáratID` szövegbeviteli mezőbe írjuk be a `TEXT` szöveget
    2. lépés: A `Biztosan törölni szeretném` checkboxot pipáljuk ki
    3. lépés: Nyomjuk meg a `Törlés` gombot
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a törlés, és az adatok törlődnek a line_names és line_stops SQL táblából.

## 2. Teszesetek (TC)

### 2.1. Új megálló hozzáadása tesztesetek

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Új megálló hozzáadása tesztelés
- Bemenet: `TEXT` = asdasdasd
- Művelet: nyomjuk meg az `Hozzáad` gombot 
- Elvárt kimenet: kiírja, hogy sikeres a hozzáadás, és az adat megjelenik a stops SQL táblában.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Meglévő megálló hozzáadása tesztelés
- Bemenet: `TEXT` = asdasdasd
- Művelet: nyomjuk meg az `Hozzáad` gombot 
- Elvárt kimenet: nem történik semmi

### 2.2. Új járat hozzáadása tesztesetek

#### 2.2.1. TC-03
- TP: TP-02
- Leírás: Új járat hozzáadása tesztelés
- Bemenet: `TEXT` = asdasdasd
- Művelet: kattintsunk rá a kijelentkezésre 
- Elvárt kimenet: az eredmény mező tartalma: vissza a főoldalra

## 2.6. Járat törlése tesztesetek

#### 2.6.1. TC-XX
- TP: TP-06
- Leírás: Járat törlése tesztelés
- Bemenet: `TEXT` = 140
- Művelet: pipáljuk be a checkboxot, majd nyomjuk meg az `Törlés` gombot 
- Elvárt kimenet: `Járat törlése sikeres` kiírás

## 3. Tesztriportok (TR)

### 3.1. Új megálló hozzáadása tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: asdasdasd megálló nevet beírtam
    2. lépés: gombot megnyomtam
    3. lépés: helyes eredményt kaptam (`Megálló hozzáadása sikeres`, megjelenik az SQL adatbázisban)
    

#### 3.1.2. TR-01 (TC-02)
- TP: TP-01
    1. lépés: asdasdasd megálló nevet beírtam
    2. lépés: gombot megnyomtam
    3. lépés: hibás eredményt kaptam (JSON-ös MySQL error, ER_DUP_ENTRY, egy új oldalon)

### 3.6. Kijelentkezés funkció tesztriportjai

#### 3.6.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: beírtam az id-t
    2. lépés: checkboxot kipipáltam
    3. lépés: törlés gombra nyomtam
    4. lépés: hibás eredmény (üres oldal, console-ban error, nem törlődött ki a járat)


    
