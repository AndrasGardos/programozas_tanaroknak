---
title: Kosárlabda-animálás!
---

Az előző leckében megtanultuk, hogyan rajzoljunk kört és vonalat. A **draw** függvény, amiben ezeket meghívtuk, nem egyszer futott le, hanem másodpercenként 60-szor. Itt az ideje, hogy ezt kihasználjuk: animáljunk egy kosárlabdát!

<iframe width="620" height="320" src="demos/bounce.html"></iframe>

De előbb kezdjünk valami egyszerűbbel, mindenki kedvenc egyenes vonalú egyenletes mozgásával.

# Mozogjunk!

Meg kell valahogy jegyeznünk, hogy éppen hol tartunk a mozgásban. Létrehozhatunk egy változót:

```javascript
let x = 100;
```

Ezzel azt mondtuk, hogy legyen egy `x` változónk, aminek az értéke legyen 100.

`x` egy változó, azaz később megváltoztathatjuk, de amíg nem tesszük, addig ugyanazt jelenti, mintha számmal odaírnánk százat.

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="200">
let d = 50;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  circle(100,100,d);
}
</script>

Ez a program ugyanazt az eredményt fogja adni, mintha a `circle(100,100,d)` helyére `circle(100,100,50)`-et írtunk volna. A változóknak bármilyen nevet adhatunk, törekedjünk a minél egyértelműbb elnevezésekre. Ez bonyolultabb, hosszabb programok esetében lesz nagyon fontos.

Egyenes vonalú mozgás esetén minden képkockánál egy kicsit mozdítsuk el a testet:

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="200">
let x = 10;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  x = x + 1;
  circle(x,100,20);
}
</script>

A _play_ gomb megnyomásával újraindíthatjuk az animációt.

{% include task.html content="Módosítsd a fenti kódot! Hozz létre egy v változót. Az x-et minden képkockánál növeld meg a v értékével. A v értéke legyen 2." %}

A kódunkba megjegyzéseket is tehetünk: minden sorban `//` utáni részt a program nem fogja figyelembe venni

A kör a végtelenségig fog jobbra menni, de senki sem fogja látni. Tegyük vissza az elejére, ha kiment a képernyőröl. Ehhez az `if` (_ha_) lesz a segítségünkre. Így tudjuk használni:

```javascript
if (feltétel) {
  // A kacsacsőrők közé írt parancsok csak akkor fognak lefutni
  // ha a feltétel igaz
}
```

Tehát a fenti példában minden képkockánál meg kell vizsgálnunk, hogy kiment-e a kör a jobb szélen, és ha igen, akkor vissza kell tennünk az elejére:

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="200">
let x = 10;
let v = 2;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  x = x + v;
  if(x>200){
      x = 10;
  }
  circle(x,100,20);
}
</script>

Csodás! Feltaláltuk a teleportáló labdát. Most juttassuk vissza valami kevésbé sci-fi módon - tegyük fel, hogy rugalmasan ütközik a rajzlap széleivel, és tökéletesen rugalmasan visszapattan.

{% include task.html content="Módosítsd a lenti kódot! A labda pattanjon vissza rugalmasan mindkét oldalon!" %}

Ha kiment a labda a jobb oldalon:

- tegyük vissza a lap jobb szélére
- majd a sebessége pedig legyen az eddigi sebesség ellentetje
  (tipp: szorozni a `*` jellel tudunk)

Ha a bal oldalon ment ki, tegyük vissza a bal szélre, majd szintén változtassuk meg a sebességét az ellentettjére!

Ne felejtsd el, a kör középpontjának koordinátáit adtuk meg. Próbáld meg úgy megcsinálni a feladatot, hogy a labda "félig" se menjen ki a vászonról.

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="200">
let x = 10;
let v = 2;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  x = x + v;
  if(x>200){
      x = 10;
  }
  circle(x,100,20);
}
</script>

ITT ÚJ LECKE

szabadesés - rugalmatlanul ütközik
e.v.e.m és a szabadesés kombinálása
