# Tesztjegyzőkönyv-`Bejelentkezés/Kijelentkezés`

Az alábbi tesztdokumentum a `Vonat` projekthez tartozó `8.3.10. Bejelentkezés` funkcióihoz készült. Felelőse: `` 

## 1. Teszteljárások (TP)

### 1.1. Bejelentkezés tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Bejelentkezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és kattintsunk a bejelentkezés gombra
    1. lépés: Az `INPUT1` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: Az `INPUT2` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Nyomjuk meg az `Elküld` gombot 
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: bejelentkezik és kiírja az oldalon, hogy `Hello, [INPUT1]`

### 1.2. Kijelentkezés funkció tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: kijelentkezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, jelentkezünk be.
    1. lépés: Kattintsunk a kijelentkezés gombra
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: kijelentkezik az alkalmazásból és vissza megy a főoldalra

## 2. Teszesetek (TC)

### 2.1. bejelentkezés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: bejelentkezés funkció tesztelése 
- Bemenet: `TEXT1` = tesztelek ; `TEXT2` = 123 
- Művelet: nyomjuk meg az `Elküld` gombot 
- Elvárt kimenet: az eredmény mező tartalma: bejelentkezik és kiírja az oldalon, hogy `Hello, [INPUT1]`

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: bejelentkezés funkció tesztelése 
- Bemenet: `TEXT1` = tesztelek ; `TEXT2` = 321 
- Művelet: nyomjuk meg az `Eküld` gombot 
- Elvárt kimenet: az eredmény mező tartalma: nem tud bejelentkezni = HIBA (Nem a helyes jelszó lett megadva)

### 2.2. Kijelentkezés funkció tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Kijelentkezés funkció tesztelése
- Művelet: kattintsunk rá a kijelentkezésre 
- Elvárt kimenet: az eredmény mező tartalma: vissza a főoldalra

## 3. Tesztriportok (TR)

### 3.1. Bejelentkezés funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: tesztelek felhasználó nevet beírtam
    2. lépés: 123 jelszót beírtam 
    3. lépés: a gomb egyszeri megnyomás után átment a bejelentkezet oldalra
    4. lépés: helyes eredményt kaptam (`Hello, tesztelek`)
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: tesztelek felhasználó nevet beírtam
    2. lépés: 321 jelszót beírtam 
    3. lépés: a gomb egyszeri megnyomás után átment a bejelentkezet oldalra
    4. lépés: helyes eredményt kaptam (HIBA)

### 3.2. Kijelentkezés funkció tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: rákattintottam a kejelentkezésre
    2. lépés: a gomb egyszeri megnyomása után vissza ment a főoldalra
    3. lépés: helyes eredményt kaptam (főoldal)


    
