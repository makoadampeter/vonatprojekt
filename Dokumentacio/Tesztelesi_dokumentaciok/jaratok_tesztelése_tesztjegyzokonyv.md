# Tesztjegyzőkönyv-`Járatok tesztelése`
 

## 1. Teszteljárások (TP)

### 1.1. Járat alapján keresés tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: Járatok alapján lekérdezés funkció tesztelése
    0. lépés: Nyissuk meg a főoldalt
    1. lépés: A `Járat neve` szövegbeviteli mezőbe írjunk be a `ID` azonosítót
    2. lépés: Nyomjuk meg a `Keresés` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `ID` azonosítójú járat megállóinak és azok indulási idejének kilistázása

## 2. Tesztesetek (TC)

### 2.1. Járat alapján keresés tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Járatok alapján lekérdezés tesztelése
- Bemenet: `ID` = 60
- Művelet: nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `60` azonosítójú járat megállóinak és azok indulási idejének kilistázása

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Járatok alapján lekérdezés tesztelése
- Bemenet: `ID` = 118
- Művelet: nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `118` azonosítójú járat megállóinak és azok indulási idejének kilistázása

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: Járatok alapján lekérdezés tesztelése
- Bemenet: `ID` = 198
- Művelet: nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `198` azonosítójú járat megállóinak és azok indulási idejének kilistázása

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: Járatok alapján lekérdezés tesztelése
- Bemenet: `ID` = 94
- Művelet: nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `94` azonosítójú járat megállóinak és azok indulási idejének kilistázása

## 3. Tesztriportok (TR)

### 3.1. Járat alapján keresés tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: `60`-t beírtam
    2. lépés: a gomb egyszeri megnyomás után megjelentek a szükséges adatok
    3. lépés: helyes eredményt kaptam

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: `118`-t beírtam
    2. lépés: a gomb egyszeri megnyomás után megjelentek a szükséges adatok
    3. lépés: helyes eredményt kaptam

    #### 3.1.3. TR-02 (TC-03)
- TP: TP-01
    1. lépés: `198`-t beírtam
    2. lépés: a gomb egyszeri megnyomás után megjelentek a szükséges adatok
    3. lépés: helyes eredményt kaptam

    #### 3.1.4. TR-02 (TC-04)
- TP: TP-01
    1. lépés: `94`-t beírtam
    2. lépés: a gomb egyszeri megnyomás után megjelentek a szükséges adatok
    3. lépés: helyes eredményt kaptam


    
