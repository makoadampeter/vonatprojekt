# Tesztjegyzőkönyv-`Járatok alapján lekérdezés`

Az alábbi tesztdokumentum a `MINTA` projekthez tartozó `8.3.8., 8.3.14. Járatok alapján lekérdezés ` funkcióihoz készült. Felelőse: `Teszt Elek` 

``` 
A tesztelési dokumentáció áttekinthetőségének érdekében egy jegyzőkönyv egy adott témához tartozó funkciókat tartalmazza 
(pl. vektorműveletek) és ne az adott projekttaghoz tartozó összes funkció tesztelését belesűrítve egy fájlba.
``` 

## 1. Teszteljárások (TP)

### 1.1. Járat alapján keresés tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Járatok alapján lekérdezés funkció tesztelése
    0. lépés: Nyissuk meg a főoldalt
    1. lépés: A `Járat neve` szövegbeviteli mezőbe írjunk be a `ID` azonosítót
    2. lépés: Nyomjuk meg a `Keresés` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `frontend kiszolgálása a megfelelő név-idő adatokkal`

## 2. Teszesetek (TC)

### 2.1. Összeadás funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Járatok alapján lekérdezés funkció tesztelése
- Bemenet: `ID` = 100b
- Művelet: nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `/jarat_alapjan_lekerdezes oldalon `100b` járat megállóinak és azok érkezési idejének kilistázása`

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Járatok alapján lekérdezés funkció tesztelése
- Bemenet: `ID` = 120
- Művelet: nyomjuk meg az `Keresés` gombot 
- Elvárt kimenet: `/jarat_alapjan_lekerdezes oldalon `120` járat megállóinak és azok érkezési idejének kilistázása`

## 3. Tesztriportok (TR)

### 3.1. Összeadás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: `100b`-t beírtam
    2. lépés: a gomb egyszeri megnyomás átirányított a megfelelő oldalra
    3. lépés: helytelen eredményt kaptam (összes érték kilistázása [szűrés szükséges])

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: `120`-t beírtam
    2. lépés: a gomb egyszeri megnyomás átirányított a megfelelő oldalra
    3. lépés: helytelen eredményt kaptam (összes érték kilistázása [szűrés szükséges])


    
