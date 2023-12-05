# Tesztjegyzőkönyv-`Megállók tesztelése`

Az alábbi tesztdokumentum a `Vonat` projekthez tartozó `8.3.7. Menetrend alapján lekérdezés` funkcióihoz készült. Felelőse: `Kovács János András` és `Csíkos Martin Nándor` 

## 1. Teszteljárások (TP)

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

### 2.1. Menetrend alapján megállók tesztesetei

#### 2.1.1. TC-01
- TP: TP-02
- Leírás: Menetrend alapján lekérdezés után megállók tesztelése
- Bemenet: Bemenet: `Honnan` = "Szeged" ; `Hova` = "Kistelek" ; `Idő` = "10:00"
- Művelet: Nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: A leghamarabb induló járatnál 10 db megállót kell jeleznie

#### 2.1.2. TC-02
- TP: TP-02
- Leírás: Menetrend alapján lekérdezés után megállók tesztelése
- Bemenet: Bemenet: `Honnan` = "Szolnok" ; `Hova` = "Cegléd" ; `Idő` = "13:30"
- Művelet: Nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: A leghamarabb induló járatnál 4 db megállót kell jeleznie

## 3. Tesztriportok (TR)

### 3.1. Menetrend alapján megállók tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: `Szeged`-t beírtam
    2. lépés: `Kistelek`-t beírtam
    3. lépés: `10:00`-t beírtam
    4. lépés: a gomb egyszeri megnyomás után megjelentek a menetrend és a leghamarabbi járatnál 10 db megállót jelez
    5. lépés: helyes eredményt kaptam

#### 3.1.2. TR-02 (TC-02)
- TP: TP-02
    1. lépés: `Szolnok`-t beírtam
    2. lépés: `Cegléd`-t beírtam
    3. lépés: `13:30`-t beírtam
    4. lépés: a gomb egyszeri megnyomás után megjelentek a menetrend és a leghamarabbi járatnál 4 db megállót jelez
    5. lépés: helyes eredményt kaptam
