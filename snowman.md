<% include p5libs.html %>

# Miért jó, ha egy tanár tud programozni?

## De mégis, mit fogok megtanulni?

# Koordináták

<iframe width="600" height="400" src="demos/coordinates.html"></src>

# Rajzoljunk!

Kattints a play gombra! Ezzel lefuttatjuk a baloldalon látható programot.

<script type="text/p5">
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  circle(100,100,50);
}
</script>

Ha minden jól megy, egy fehér kört látsz világoszöld háttér előtt. Nézzük meg, hogyan működik ez a program:

- Két "függvényt" (a programozásban ez kicsit mást jelent, mint a matekban) hoztunk létre, a `setup` és a `draw` függvényeket.
- Amikor a play gombra kattintottál, a p5 először lefuttatja a `setup` függvényt. Ez egyetlen utasítást tartalmaz: a `createCanvas(200,200);` létrehoz egy 200 pixel szélességű és 200 pixel hosszúságú "vásznat", erre fog a program a továbbiakban rajzolni.
- A `setup` függvény után a `draw` függvény fut le. Itt két utasítás van: Az első az egész hátteret beszínezi kék színre. A második utasítás egy kört rajzol a megadott paraméterek alapján. Kört a

```javascript
circle(x, y, d);
```

paranccsal rajzolhatunk, ahol `x` és `y` a kör középpontjának koordinátái, `d` pedig a kör átmérője.

Feladat: Változtasd meg a fenti programot úgy, hogy nagyobb kört rajzoljon. Ha átírtad a megfelelő utasítást, ismét kattints a Play gombra!

### Színezzünk

A `fill` utasítással a kitöltőszínt változtathatjuk meg. A kitöltőszín megmarad, amíg ismét meg nem változtatjuk.
Például rajzolhatunk egy kokárdát:

<script type="text/p5">
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightblue");
  fill("red");
  circle(100,100,90);
  fill("white");
  circle(100,100,60);
  fill("green");
  circle(100,100,30);
}
</script>

Kérdés: Miért fontos, hogy pont ebben a sorrendben legyenek az utasítások? Mi történne, ha megváltoztatnánk? _Próbáld ki!_

# Rajzolj vonalat

Vonalat rajzolhatunk a `line` utasítással:

```javascript
line(x1, y1, x2, y2);
```

ahol x1 és y1 a kezdő-, x2 és y2 pedig a végpont koordinátái.

# Végső megmérettetés: rajzoljuk hóembert!

<script type="text/p5">
    function setup() {
    createCanvas(300, 400);
    }

    function draw() {
    background("red");
    }
</script>

Módosítsd a fenti kódot úgy, hogy az egy hóembert rajzoljon. Ez a hóember:

- Világos vagy sötétkék háttér előtt
- Legalább 3, különböző nagyságú körből álljon
- Legyen legalább egy kör más színű, mint a többiek
- Talajon álljon (legyen alatta egy vonal)
- Lehetsz kreatív! ;)

A megoldásotokat (a kódot) másoljátok ki és a Google Classroomon keresztül küldjétek el!
