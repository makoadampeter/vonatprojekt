# Tesztjegyzőkönyv-`Admin felület`

Az alábbi tesztdokumentum a `Vonat` projekthez tartozó `8.3.11. Admin felület` funkcióihoz készült. Felelőse: `Bíró Szabolcs László` és `Kovács János András` 

## 1. Teszteljárások (TP)

### 1.1. Új megálló hozzáadása
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Új megálló hozzáadása az SQL adatbázishoz
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `Megálló neve` szövegbeviteli mezőbe írjuk be a `TEXT` szöveget
    2. lépés: Nyomjuk meg a `Hozzáad` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a hozzáadás, és az adat megjelenik a stops SQL táblában.

### 1.2. Új járat hozzáadása
- Azonosító: TP-02
- Tesztesetek: TC-03, TC-04
- Leírás: Új járat hozzáadása az SQL adatbázishoz több megállóval
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `JáratID` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: Az `Megálló neve` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Az `00 perc` szövegbeviteli mezőbe írjuk be a `TEXT3` szöveget
    4. lépés: Nyomjuk meg a `Megálló hozzáadás` gombot
    5. lépés: Az `Megálló neve` szövegbeviteli mezőbe írjuk be a `TEXT4` szöveget
    6. lépés: Az `00 perc` szövegbeviteli mezőbe írjuk be a `TEXT5` szöveget
    7. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a hozzáadás, és az adat megjelenik a line_names és line_stops SQL táblában.


### 1.3. Megálló módosítása
- Azonosító: TP-03
- Tesztesetek: TC-05, TC-06
- Leírás: Megálló módosítása az SQL adatbázisból
    0. lépés: Nyissuk meg az alkalmazást, jelentkezzünk be adminként (felhasználónév: admin, jelszó: admin), és nyomjunk az Admin felület gombra
    1. lépés: Az `Jelenlegi megállónév` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: Az `Új megállónév` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Nyomjuk meg a `Módosít` gombot
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kiírja, hogy sikeres a módosítás, és az adat frissül a stops SQL táblában.

### 1.4. Járat módosítása 
- Azonosító: TP-04
- Tesztesetek: TC-07, TC-08
- Leírás: Járat módosítása tesztelése
    0. lépés: Adminként bejelentkezve nyissuk meg az `Admin felület` oldalt
    1. lépés: Az `Új megálló hozzáadása` egységen belül a `járat név` szövegbeviteli mezőbe írjunk be a `NEV` szöveget
    2. lépés: Nyomjuk meg az `ID lekérés` gombot
	3. lépés: Nyomjuk meg az `Listázás` gombot
	4. lépés: A `Megálló hozzáadás` és `Megálló eltávolítás` gombok segítségével változtathatjuk a megállók számát
	5. lépés: A feltöltött szövegbeviteli mezőkben szerkesztjük a megállókat
	6. lépés: Nyomjuk meg az `Járat módosítás` gombot
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Felugró értesítés (`Járat módosítása sikeres.`)
	
### 1.5. Járat törlése
- Azonosító: TP-05
- Tesztesetek: TC-09
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

#### 2.2.2. TC-03
- TP: TP-02
- Leírás: Új járat hozzáadása tesztelés
- Bemenet: `JáratID` = asdasdasd
- Művelet: Új megálló felvételéhez kattintsunk a `Megálló hozzáadása` gombra
- Bemenet: `01. megálló` = Szeged, `ido` = 10
- Bemenet: `02. megálló` = Kistelek, `ido` = 20
- Elvárt kimenet: kiírja, hogy sikeres a hozzáadás, és az adat megjelenik a line_names és line_stops SQL táblában.

#### 2.2.4. TC-04
- TP: TP-02
- Leírás: Új járat hozzáadása tesztelés
- Bemenet: `JáratID` = uj_jarat
- Művelet: Új megálló felvételéhez kattintsunk a `Megálló hozzáadása` gombra
- Bemenet: `01. megálló` = nemletezo1, `ido` = 10
- Bemenet: `02. megálló` = nemletezo2, `ido` = 20
- Elvárt kimenet: hibaüzenet, hogy nincs ilyen megálló, a táblák ne frissüljenek

### 2.3. Megálló módosítása tesztesetei

#### 2.3.1. TC-05
- TP: TP-03
- Leírás: Megálló módosítása tesztelés
- Bemenet: `TEXT1` = Kecskemét, `TEXT2` = Kecskemét1
- Művelet: Megálló módosításához kattintsunk a `Módosít` gombra
- Elvárt kimenet: módosítja a meglévő megállót

#### 2.3.2. TC-06
- TP: TP-03
- Leírás: Megálló módosítása tesztelés nem létező megállóval
- Bemenet: `TEXT1` = abwkdjbakwdbkawbkdk, `TEXT2` = Kecskemét2
- Művelet: Megálló módosításához kattintsunk a `Módosít` gombra
- Elvárt kimenet: hibát kapunk, nem történik módosítás az adatbázisban


### 2.4. Járat módosítása tesztesetei

#### 2.4.1. TC-07
- TP: TP-04
- Leírás: Járat módosítása tesztelése
- Bemenet: `NEV` = 70
- Művelet: nyomjuk meg az `ID lekérés` gombot 
- Művelet: nyomjuk meg az `Listázás` gombot 
- Művelet: nyomjuk meg az `Megálló eltávolítás` gombot 
- Művelet: nyomjuk meg az `Járat módosítás` gombot 
- Elvárt kimenet: Felugró értesítés (`Járat módosítása sikeres.`)

#### 2.4.2. TC-08
- TP: TP-04
- Leírás: Járat módosítása tesztelése
- Bemenet: `NEV` = 71
- Művelet: nyomjuk meg az `ID lekérés` gombot 
- Művelet: nyomjuk meg az `Listázás` gombot 
- Művelet: nyomjuk meg az `Megálló hozzáadás` gombot 
- Művelet: írjuk be "Cegléd" 24. `megálló neve` szövegbeviteli mezőbe
- Művelet: írjuk be "20" 24. `00 perc` szövegbeviteli mezőbe
- Művelet: nyomjuk meg az `Járat módosítás` gombot 
- Elvárt kimenet: Felugró értesítés (`Járat módosítása sikeres.`)

### 2.5. Járat törlése tesztesetek

#### 2.5.1. TC-09
- TP: TP-05
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
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: asdasdasd megálló nevet beírtam
    2. lépés: gombot megnyomtam
    3. lépés: hibás eredményt kaptam (JSON-ös MySQL error, ER_DUP_ENTRY, egy új oldalon)

### 3.2. Új járat hozzáadása tesztriportjai

#### 3.2.1. TR-03 (TC-03)
- TP: TP-02
    1. lépés: asdasdasd beírva
    2. lépés: Szeged beírva
    3. lépés: 10 beírva
    4. lépés: gomb megnyomva
    5. lépés: Kistelek beírva
    6. lépés: 20 beírva
    7. lépés: line_names és line_stops SQL táblák frissülnek, de erről nem kapok visszajelzést

#### 3.2.4. TR-04 (TC-04)
- TP: TP-02
    1. lépés: asdasdasd beírva
    2. lépés: nemletezo1 beírva
    3. lépés: 10 beírva
    4. lépés: gomb megnyomva
    5. lépés: nemletezo1 beírva
    6. lépés: 20 beírva
    7. lépés: hiba, frissül a line_names tábla

### 3.3. Megálló módosítása tesztriportjai

#### 3.3.1 TR-05 (TC-05)
- TP: TP-03
    1. lépés: Kecskemétet beírtam
    2. lépés: Kecskemét1-et beírtam
	3. lépés: A gombot megnyomtam
    4. lépés: helyes eredményt kaptam (megváltozott az adat)

#### 3.3.2 TR-06 (TC-06)
- TP: TP-03
    1. lépés: abwkdjbakwdbkawbkdk-t beírtam
    2. lépés: Kecskemét2-et beírtam
	3. lépés: A gombot megnyomtam
    4. lépés: hibás eredményt kaptam (success, de az SQL adatbázis nem változott)

### 3.4. Járat módosítása tesztriportjai

#### 3.4.1. TR-07 (TC-07)
- TP: TP-04
    1. lépés: `70`-t beírtam
    2. lépés: A gombot megnyomtam
	3. lépés: A gombot megnyomtam
	4. lépés: A gombot megnyomtam
	5. lépés: -
	6. lépés: A gombot megnyomtam
    7. lépés: helytelen eredményt kaptam (nem történt semmi)

#### 3.4.2. TR-08 (TC-08)
- TP: TP-04
    1. lépés: `71`-t beírtam
    2. lépés: A gombot megnyomtam
	3. lépés: A gombot megnyomtam
	4. lépés: A gombot megnyomtam
	5. lépés: -
	6. lépés: A gombot megnyomtam
    7. lépés: helytelen eredményt kaptam (nem történt semmi)


### 3.5. Járat törlése tesztriportjai

#### 3.5.1. TR-09 (TC-09)
- TP: TP-05
    1. lépés: beírtam az id-t
    2. lépés: checkboxot kipipáltam
    3. lépés: törlés gombra nyomtam
    4. lépés: hibás eredmény (üres oldal, console-ban error, nem törlődött ki a járat)
