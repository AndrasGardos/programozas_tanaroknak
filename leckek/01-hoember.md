---
title: Rajzoljunk hóembert!
description: Programozás tanároknak - I. lecke
---

# Miért tanuljon meg egy tanár programozni?

Amikor egy gimnáziumban fizikát tanítottam, nagy segítségemre volt a programozási tudásom. Első órámon a harmonikus rezgőmozgást tanítottam. A harmonikus rezgőmozgást a körmozgásból vezetjük le. Úgy éreztem, hogy a kettő közötti kapcsolatot az osztály egy része nem igazán értette meg, ezért következő órára csináltam nekik ezt:

<iframe src="https://harmonikus.netlify.com/" width="620" height="620"></iframe>

Ez a szimuláció sokat segített nekik, hogy intuitív módon megértsék a kapcsolatot.
A tudásukat is fel tudtam mérni, ki kellett találniuk, melyik csúszka az amplitudó, melyik a szögsebesség, illetve megértették, hogy mi a kapcsolat az amplitúdó, a szögsebesség, frekvencia, periódusidő és a kerületi sebesség között.

Sajnos, sokszor a diákok bemagolják a képleteket anélkül, hogy megértenék, mit is jelentenek ezek az összefüggések. A megértésben sokat segíthetnek az ilyen szimulációk.

## Mit fogunk tanulni

Gyakorlati példákon keresztül tanuljuk meg a programozás alapjait. A javascript nyelvet fogjuk használni: ez az a nyelv, ami a böngészőkben a weblapokat interaktívvá teszi, szinte minden weblap használja. A javascript nyelvvel készült szimulációk nagy előnye, hogy gyakorlatilag bármilyen eszközön használhatók, amivel internetezni lehet.

A javascripten mellett a **p5.js** könyvtárat fogjuk használni. A _p5.js_ könyvtár célja, hogy a webes interaktív animációk, szimulációk készítését minél egyszerűbbé tegye mindenkinek.

# Koordináták a képernyőn

A számítógépes grafikában egy kicsit más koordinátarendszert használunk, mint a matekórákon. A régi számítógépek csak szöveget tudtak megjeleníteni, így sorokban és oszlopokban "gondolkodtak".

Ezért a koordinátarendszer origója a bal-felső sarokban van, az x értéke balról jobbra nő (pont mint matekórán), viszont **az y értéke lefelé nő**. Ez elsőre talán furcsa lesz, de könnyen meg lehet szokni. Vidd az egeret a szürke terület felé, és figyeld meg hogyan változnak a koordináták.

<iframe width="620" height="420" src="demos/coordinates.html"></iframe>

# Rajzolj programozva

## Körök

Kattints a play gombra! Ezzel lefuttatjuk a baloldalon látható programot.

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="200">
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  circle(100,100,50);
}
</script>

Ha minden jól megy, egy fehér kört látsz világoszöld háttér előtt. Nézzük meg, hogyan működik ez a program:

- Két "függvényt" (a programozásban ez kicsit mást jelent, mint a matekban) hoztunk létre, a **setup** és a **draw** függvényeket.
- Amikor a play gombra kattintottál, a p5 először lefuttatja a **setup** (_telepítés_) függvényt. Ez egyetlen utasítást tartalmaz: a `createCanvas(200,200);` létrehoz egy 200 pixel szélességű és 200 pixel hosszúságú "vásznat", erre fog a program a továbbiakban rajzolni.
- A _setup_ függvény után a **draw** (_rajzolás_) függvény fut le. Itt két utasítás van:
  - Az első, a `background("lightgreen")` az egész hátteret beszínezi világoszöld színre.
  - A második utasítás egy kört rajzol a megadott paraméterek alapján. Kört a `circle(x, y, d);` paranccsal rajzolhatunk, ahol `x` és `y` a kör középpontjának koordinátái, `d` pedig a kör átmérője.

A `draw` függvényben megadott parancsok nem csak egyszer futnak le, hanem másodpercenként 60-szor. (Ebben a leckében ennek nincs jelentősége, mert statikus rajzokat készítünk.)

{% include task.html content="Változtasd meg a fenti programot úgy, hogy nagyobb kört rajzoljon. Ha átírtad a megfelelő utasítást, ismét kattints a Play gombra!" %}

## Színezzünk

A `fill` utasítással a kitöltőszínt változtathatjuk meg. A kitöltőszín megmarad, amíg ismét meg nem változtatjuk.
Például rajzolhatunk egy francia kokárdát:

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="300" data-height="400">
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightblue");
  fill("red");
  circle(100,100,90);
  fill("white");
  circle(100,100,60);
  fill("blue");
  circle(100,100,30);
}
</script>

A `fill` és a `background` parancsok [ezeknek a színeknek](https://www.w3schools.com/colors/colors_names.asp) a neveit tudják.

{% include task.html content="Változtasd meg a fenti programot úgy, hogy magyar kokárdát rajzoljon!" %}

{% include question.html content="Miért fontos, hogy pont ebben a sorrendben legyenek az utasítások? Mi történne, ha megváltoztatnánk?" %}

## Vonal

Vonalat rajzolhatunk a `line` utasítással:

```javascript
line(x1, y1, x2, y2);
```

ahol x1 és y1 a kezdő-, x2 és y2 pedig a végpont koordinátái.

{% include task.html content="Fejezd be a házat az alábbi programban!" %}

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="200">
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightblue");
  line(50,50,50,150);
  line(150,50,150,150);
  line(50,150,150,150);
  line(50,50,100,0);
}
</script>

# Végső megmérettetés ☃️

{% include homework.html content="Módosítsd az alábbi kódot úgy, hogy az egy hóembert rajzoljon. A megoldásról (kód + eredménye) készíts képernyőfelvételt (screenshotot), és töltsd fel a Google Classroomba! " %}

A hóember:

- Világos- vagy sötétkék háttér
- Legalább 3, különböző nagyságú körből álljon
- Legyen legalább egy kör más színű, mint a többiek
- Talajon álljon (legyen alatta egy vonal)
- Engedd szabadjára kreativitásod! ;)

Figyelj arra, hogy a nagy és a kisbetűk ebben a nyelven nem felcserélhetők. Az egyes utasítások végére `;` kerüljön. Az sortöréseket, behúzásokat, szóközöket nem veszi figyelembe a program, ezeket az olvashatóság miatt érdemes alkalmazni.

Haladj apróbb lépésekben! A kész kód eredményét minden kisebb lépés után ellenőrizd a Play gomb megnyomásával - így könnyebb időben észrevenni a hibákat. Sok sikert! ;)

_ A legjobb, legkreatívabb megoldásokat megosztanám a többiekkel is. Ha nem szeretnéd, hogy a tiedet megosszam, kérlek jelezd a feladat beküldésekor! _

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="300" data-height="600">
function setup() {
  createCanvas(300, 400);
}

function draw() {
  background("red");
}
</script>
