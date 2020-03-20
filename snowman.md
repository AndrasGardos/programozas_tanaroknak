---
title: Első lecke
---

# Miért jó, ha egy tanár tud programozni?

## De mégis, mit fogok megtanulni?

# Koordináták a képernyőn

A számítógépes grafikában egy kicsit más koordinátarendszert használunk, mint a matekórákon. A régi számítógépek csak szöveget tudtak megjeleníteni, így sorokban és oszlopokban "gondolkodtak".

Ezért a koordinátarendszer origója a bal-felső sarokban van, az x értéke balról jobbra nő (pont mint matekórán), viszont **az y értéke lefelé nő**. Ez elsőre talán furcsa lesz, de könnyen meg lehet szokni. Vidd az egeret a szürke terület felé, és figyeld meg hogyan változnak a koordináták.

<iframe width="620" height="420" src="demos/coordinates.html"></iframe>

# Rajzoljunk!

## Körözz!

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
- A _setup_ függvény után a **draw** függvény fut le. Itt két utasítás van:
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

{% include task.html content="Változtasd meg a fenti programot úgy, hogy magyar kokárdát rajzoljon!" %}

{% include question.html content="Miért fontos, hogy pont ebben a sorrendben legyenek az utasítások? Mi történne, ha megváltoztatnánk? Próbáld ki!" %}

## Rajzolj vonalat

Vonalat rajzolhatunk a `line` utasítással:

```javascript
line(x1, y1, x2, y2);
```

ahol x1 és y1 a kezdő-, x2 és y2 pedig a végpont koordinátái.

# Végső megmérettetés: rajzolj hóembert!

{% include homework.html content="Módosítsd az alábbi kódot úgy, hogy az egy hóembert rajzoljon. A megoldásról (kód + eredménye) készíts screenshotot, és töltsd fel a Google Classroomba! " %}

A hóember:

- Világos vagy sötétkék háttér
- Legalább 3, különböző nagyságú körből álljon
- Legyen legalább egy kör más színű, mint a többiek
- Talajon álljon (legyen alatta egy vonal)
- Légy kreatív! ;)

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="300" data-height="600">
function setup() {
  createCanvas(300, 400);
}

function draw() {
  background("red");
}
</script>

Haladj apróbb lépésekben! A kész kód eredményét minden kisebb lépés után ellenőrizd a Play gomb megnyomásával - így könnyebb időben észrevenni a hibákat. Sok sikert! ;)
