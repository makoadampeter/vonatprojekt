# Tesztjegyzőkönyv-`Megállók tesztelése`

Az alábbi tesztdokumentum a `Vonat` projekthez tartozó `8.4.7. Megállók tesztelése` funkcióihoz készült. Felelőse: `Patyi Péter` 

## 1. Teszteljárások (TP)

### 1.1. Megállók tesztelése járatok alapján 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Megállók tesztelése járatok alapján funkció tesztelése
    0. lépés: Nyissuk meg a főoldalt
    1. lépés: A `Járat neve` szövegbeviteli mezőbe írjunk be a `ID` azonosítót
    2. lépés: Nyomjuk meg a `Keresés` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `ID` azonosítójú járatnak az összes megállóját kilistázza

### 1.2. Megállók tesztelése menetrend alapján 
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: Megállók tesztelése menetrend alapján funkció tesztelése
    0. lépés: Nyissuk meg a főoldalt
    1. lépés: A `Honnan` szövegbeviteli mezőbe írjuk be az indulási helyet
    2. lépés: A `Hova` szövegbeviteli mezőbe írjuk be az érkezési helye 
    3. lépés: A `Idő` beviteli mezőbe írjuk be az indulási idő
    3. lépés: Nyomjuk meg a `Keresés` gombot
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: A leghamarabbi induló járatnál helyesen jeleniti meg a megállók darab számát

## 2. Teszesetek (TC)

### 2.1. Megállók tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Járatok alapján lekérdezés után megállók tesztelése
- Bemenet: `ID` = 100
- Művelet: Nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `100` azonosítójú járatnak mind a `45` megállóját kilistázza

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Járatok alapján lekérdezés után megállók tesztelése
- Bemenet: `ID` = 10
- Művelet: Nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `10` azonosítójú járatnak mind a `18` megállóját kilistázza

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Menetrend alapján lekérdezés után megállók tesztelése
- Bemenet: Bemenet: `Honnan` = "Szeged" ; `Hova` = "Kistelek" ; `Idő` = "10:00"
- Művelet: Nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: A leghamarabb induló járatnál 10 db megállót kell jeleznie

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Menetrend alapján lekérdezés után megállók tesztelése
- Bemenet: Bemenet: `Honnan` = "Szolnok" ; `Hova` = "Cegléd" ; `Idő` = "13:30"
- Művelet: Nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: A leghamarabb induló járatnál 4 db megállót kell jeleznie

## 3. Tesztriportok (TR)

### 3.1. Járat alapján megállók tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: `100`-t beírtam
    2. lépés: a gomb egyszeri megnyomás után megjelentek a megállók nevei és az indulási idejük, összsen 45 megállót listázott ki
    3. lépés: helyes eredményt kaptam

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: `10`-t beírtam
    2. lépés: a gomb egyszeri megnyomás után megjelentek a megállók nevei és az indulási idejük, összsen 18 megállót listázott ki
    3. lépés: helyes eredményt kaptam

### 3.2. Menetrend alapján megállók tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: `Szeged`-t beírtam
    2. lépés: `Kistelek`-t beírtam
    3. lépés: `10:00`-t beírtam
    4. lépés: a gomb egyszeri megnyomás után megjelentek a menetrend és a leghamarabbi járatnál 10 db megállót jelez
    5. lépés: helyes eredményt kaptam

#### 3.2.2. TR-02 (TC-02)
- TP: TP-02
    1. lépés: `Szolnok`-t beírtam
    2. lépés: `Cegléd`-t beírtam
    3. lépés: `13:30`-t beírtam
    4. lépés: a gomb egyszeri megnyomás után megjelentek a menetrend és a leghamarabbi járatnál 4 db megállót jelez
    5. lépés: helyes eredményt kaptam



    
