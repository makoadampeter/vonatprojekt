# Tesztjegyzőkönyv-`Email-es értesítés`

Az alábbi tesztdokumentum a Vonat projekthez tartozó 8.4.1. Kapcsolat funkcióihoz készült. Felelőse: Kovács János András

## 1. Teszteljárások (TP)

### 1.1. Email küldés tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Email küldése
    0. lépés: Nyissuk meg az alkalmazást, és kattintsunk a kapcsolat fülre
    1. lépés: A 'Kérjük adja meg email címét.' szövegbeviteli mezőbe írjuk be a `TEXT1` szöveget
    2. lépés: A 'Tárgy' szövegbeviteli mezőbe írjuk be a `TEXT2` szöveget
    3. lépés: Az 'Email szövege...' szövegbeviteli mezőbe írjuk be a `TEXT3` szöveget
    4. lépés: Nyomjuk meg a `Küldés` gombot
    5. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: "E-mail küldése sikeres" alert, az e-mail megjelenik a projekthez létrehozott e-mailes inboxban.

## 2. Teszesetek (TC)

### 2.1. Email küldés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: email küldés funkció tesztelése 
- Bemenet: `TEXT1` = asd@asd.asd ; `TEXT2` = jo napot kivanok jo e a teszt vagy nem ; `TEXT3` = "
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbb b bbbb
éáőúűöüó
#&@{};>*
"
- Művelet: nyomjuk meg a `Küldés` gombot 
- Elvárt kimenet: "E-mail küldése sikeres" alert, az e-mail megjelenik a projekthez létrehozott e-mailes inboxban.

## 3. Tesztriportok (TR)

### 3.1. Bejelentkezés funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: email címet beírtam
    2. lépés: tárgyat beírtam 
    3. lépés: email szövegét beírtam 
    4. lépés: gombot megnyomtam
    5. lépés: helyes eredményt kaptam (alert, inboxban megjelent az email)