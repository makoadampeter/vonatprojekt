# Tesztjegyzőkönyv-`Regisztráció`

Az alábbi tesztdokumentum a `Vonat` projekthez tartozó `8.3.9. Regisztráció` funkcióihoz készült. Felelőse: `Patyi Péter` 


## 1. Teszteljárások (TP)

### 1.1. Regisztráció funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: regisztráció funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és kattintsunk a regisztrációs gombra
    1. lépés: A `Keresztnév` szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: A `Vezetéknév` szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: A `Felhasználónév` szövegbeviteli mezőbe írjuk be a `TEXT3` szöveget
    4. lépés: Az `E-mail` szövegbeviteli mezőbe írjuk be a `TEXT4` szöveget
    5. lépés: A `Jelszó` szövegbeviteli mezőbe írjuk be a `TEXT5` szöveget
    6. lépés: A `Jelszó újra` szövegbeviteli mezőbe írjuk be a `TEXT6` szöveget
    7. lépés: Pipáljuk be a `Tudomásul veszem az adatkezelési szabályzatot!`
    8. lépés: Nyomjuk meg az `Elküld` gombot 
    9. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: adatbázisban létrejön a `users` táblában egy új sor a beírt adatokkal


## 2. Teszesetek (TC)

### 2.1. regisztráció funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `TEXT1` = Elek; `TEXT2` = Teszt; `TEXT3` = tesztelek; `TEXT4` = tesztelek@gmail.com; `TEXT5` = 123; `TEXT6` = 123; checkbox = pipa
- Művelet: nyomjuk meg az `Elküld` gombot 
- Elvárt kimenet: adatbázisban létrejön a `users` táblában egy új sor a beírt adatokkal

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `TEXT1` = Elek; `TEXT2` = Remek; `TEXT3` = remekelek; `TEXT4` = remekelek@gmail.com; `TEXT5` = 123; `TEXT6` = 321; checkbox = pipa
- Művelet: nyomjuk meg az `Elküld` gombot 
- Elvárt kimenet: az eredmény mező tartalma: adatbázisban nem jön létre a `users` táblában az új sor = HIBA (a két jelszó nem egyezik)

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `TEXT1` = Elek; `TEXT2` = Remek; `TEXT3` = user007; `TEXT4` = remekelek@gmail.com; `TEXT5` = 123; `TEXT6` = 321; checkbox = pipa
- Művelet: nyomjuk meg az `Elküld` gombot 
- Elvárt kimenet: az eredmény mező tartalma: adatbázisban nem jön létre a `users` táblában az új sor = HIBA (van már ilyen felhasználó név)

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `TEXT1` = Denes; `TEXT2` = Min; `TEXT3` = mindenes; `TEXT4` = davidwilson@example.net; `TEXT5` = 1234; `TEXT6` = 1234; checkbox = pipa
- Művelet: nyomjuk meg az `Elküld` gombot 
- Elvárt kimenet: az eredmény mező tartalma: adatbázisban nem jön létre a `users` táblában az új sor = HIBA (van már ilyen email cím)


## 3. Tesztriportok (TR)

### 3.1. regisztráció funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Elek keresztnevet beírtam
    2. lépés: Teszt vezetéknevet beírtam
    3. lépés: tesztelek felhasználónevet beírtam
    4. lépés: tesztelek@gmail.com email-t beírtam
    5. lépés: 123 jelszót beírtam
    6. lépés: 123 jelszót beírtam
    7. lépés: Bepipáltam az adatkezelési szabályzatot
    8. lépés: a gomb egyszeri megnyomása után a főoldalra ment
    9. lépés: helyes eredményt kaptam (adatbázisban létrejött a `users` táblában egy új sor a beírt adatokkal)
    
#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: Elek keresztnevet beírtam
    2. lépés: Remek vezetéknevet beírtam
    3. lépés: remekelek felhasználónevet beírtam
    4. lépés: remekelek@gmail.com email-t beírtam
    5. lépés: 123 jelszót beírtam
    6. lépés: 321 jelszót beírtam
    7. lépés: Bepipáltam az adatkezelési szabályzatot
    8. lépés: a gomb egyszeri megnyomása után maradt a regisztrációs oldalon
    9. lépés: helyes eredményt kaptam (HIBA)

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: Elek keresztnevet beírtam
    2. lépés: Remek vezetéknevet beírtam
    3. lépés: user007 felhasználónevet beírtam
    4. lépés: remekelek@gmail.com email-t beírtam
    5. lépés: 123 jelszót beírtam
    6. lépés: 123 jelszót beírtam
    7. lépés: Bepipáltam az adatkezelési szabályzatot
    8. lépés: a gomb egyszeri megnyomása után maradt a regisztrációs oldalon
    9. lépés: helyes eredményt kaptam (HIBA)

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
    1. lépés: Denes keresztnevet beírtam
    2. lépés: Min vezetéknevet beírtam
    3. lépés: mindenes felhasználónevet beírtam
    4. lépés: davidwilson@example.net email-t beírtam
    5. lépés: 1234 jelszót beírtam
    6. lépés: 1234 jelszót beírtam
    7. lépés: Bepipáltam az adatkezelési szabályzatot
    8. lépés: a gomb egyszeri megnyomása után maradt a regisztrációs oldalon
    9. lépés: helyes eredményt kaptam (HIBA)