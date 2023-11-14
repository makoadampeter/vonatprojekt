# Tesztjegyzőkönyv-`Menetrend alapján lekérdezés`

Az alábbi tesztdokumentum a `Vonat` projekthez tartozó `8.3.7. Menetrend alapján lekérdezés` funkcióihoz készült. Felelőse: `Csíkos Martin Nándor` és `Kovács János András` 

## 1. Teszteljárások (TP)

### 1.1. Járatok kilistázása hely és idő alapján. 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Menetrend alapján keresés funkció tesztelése
    0. lépés: a kezőoldalon a Menetrend alapján keresés ablakot használjuk
    1. lépés: a `Honnan` szövegbeviteli mezőbe írjuk be az indulási helyet
    2. lépés: a `Hova` szövegbeviteli mezőbe írjuk be az érkezési helyet
    3. lépés: a `Idő` beviteli mezőbe írjuk be az indulási idő
    4. lépés: nyomjuk meg a `Keresés` gombot 
    5. lépés: ellenőrizzük az eredményt: elvárt eredmény: lista a járatokról idő szerint növekvő sorrendben adott idő után

## 2. Teszesetek (TC)

### 2.1. Menetrend alapján keresés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Menetrend alapján keresés funkció tesztelése 
- Bemenet: `Honnan` = "Szeged" ; `Hova` = "Kistelek" ; `idő` = "10:00"
- Keresés: nyomjuk meg a `Keresés` gombot
- Elvárt kimenet: lista a járatokról idő szerint növekvő sorrendben 10:00 után

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Menetrend alapján keresés funkció tesztelése 
- Bemenet: `Honnan` = "Szolnok" ; `Hova` = "Cegléd" ; `idő` = "13:30"
- Keresés: nyomjuk meg a `Keresés` gombot
- Elvárt kimenet: lista a járatokról idő szerint növekvő sorrendben 13:30 után

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: Menetrend alapján keresés funkció tesztelése 
- Bemenet: `Honnan` = "Nemletezo" ; `Hova` = "ozetelmeN" ; `idő` = "00:00"
- Keresés: nyomjuk meg a `Keresés` gombot
- Elvárt kimenet: hibaüzenet

## 3. Tesztriportok (TR)

### 3.1. Menetrend alapján keresés funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Szegedet beírtam
    2. lépés: Kisteleket beírtam 
    3. lépés: 10:00 órát beírtam
    4. lépés: a Keresés gomb egyszeri megnyomása után helyes listát kaptam (lista a járatokról idő szerint növekvő sorrendben 10:00 után)
    
#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: Szolnokot beírtam
    2. lépés: Ceglédet beírtam
    3. lépés: 13:30 órát beírtam
    4. lépés: a Keresés gomb egyszeri megnyomása után helyes listát kaptam (lista a járatokról idő szerint növekvő sorrendben 13:30 után)

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: Nemletezo-t beírtam
    2. lépés: ozetelmeN-t beírtam
    3. lépés: 00:00 órát beírtam
    4. lépés: a Keresés gomb egyszeri megnyomása után hibaüzenetet kaptam
