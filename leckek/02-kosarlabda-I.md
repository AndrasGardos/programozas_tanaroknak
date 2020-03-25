---
title: Kosárlabdázzunk - I. rész
---

Az előző leckében megtanultuk, hogyan rajzoljunk kört és vonalat. A **draw** függvény, ami ezeket az utasításokat tartalmazta, nem egyszer futott le, hanem másodpercenként 60-szor. Itt az ideje, hogy ezt kihasználjuk: animáljunk egy kosárlabdát!

<iframe width="680" height="340" src="demos/bounce.html"></iframe>

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

Egyenes vonalú mozgás esetén minden képkocka megrajzolásánál egy kicsit növeljük meg az x értékét, így mindig egy kicsit arrébb rajzolva a kört:

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

Az `x` változóra és értékére minden rajzolásnál szükségünk lesz, ezért fontos, hogy a funkciókon kívül hozzuk létre (így globálisan érvényes lesz).

{% include task.html content="Módosítsd a fenti kódot! Hozz létre egy v változót. Az x-et minden képkockánál növeld meg a v értékével. A v értéke legyen 2." %}

A kódunkba megjegyzéseket is tehetünk: minden sorban `//` utáni részt a program nem fogja figyelembe venni

A kör a végtelenségig fog jobbra menni, de senki sem fogja látni. Tegyük vissza az elejére, ha kiment a képernyőröl. Ehhez az `if` (_ha_) lesz a segítségünkre. Így tudjuk használni:

```javascript
if (feltétel) {
  // A kapcsos zárójelek közé írt parancsok csak akkor fognak lefutni
  // ha a feltétel (lásd a lecke végén) igaz
}
```

A fenti példában minden képkocka megrajzolásánál meg kell vizsgálnunk, hogy kiment-e a kör a rajzlap jobb szélen, és ha igen, akkor vissza kell tennünk az elejére:

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="250" data-height="400">
let x = 10;
let v = 2;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  x = x + v;
  // ha kiment a jobb szélen
  if(x>200){
      x = 10;
  }
  circle(x,100,20);
}
</script>

Csodás! Feltaláltuk a teleportáló labdát. Most juttassuk vissza valami kevésbé sci-fi módon - tegyük fel, hogy rugalmasan ütközik a rajzlap széleivel, és tökéletesen rugalmasan visszapattan.

{% include homework.html content="Módosítsd a lenti kódot! A labda pattanjon vissza rugalmasan mindkét oldalon! A kész <b>kódot</b> (ne képernyőfotót!) tölsd fel a Google Classroomba, egy új Dokumentumba." %}

Ha kiment a labda a jobb oldalon:

- tegyük vissza a lap jobb szélére
- majd a sebessége pedig legyen az eddigi sebesség **ellentetje** (tipp: szorozni a `*` jellel tudunk. mekkora sebességgel menjen egy kör jobbra, ahhoz, hogy balra menjen?)

Ha a bal oldalon ment ki, tegyük vissza a bal szélre, majd szintén változtassuk meg a sebességét az ellentettjére!

Ne felejtsd el, a kör középpontjának koordinátáit adtuk meg. Próbáld meg úgy megcsinálni a feladatot, hogy a labda "félig" se menjen ki a vászonról.

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="250" data-height="650">
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

# A "feltétel"-ekről

A feltétel egy kifejezés, ami igaz, vagy hamis értéket ad. Például:

```javascript
let a = 7;
let b = 9;
let c = 7;
let d = true; // igaz
let e = false; // hamis

a < b; // a kisebb mint b : igaz
a > b; // a nagyobb mint b : hamis
a >= c; // Igaz, a nagyobb-vagy-egyenlő c-nél
a <= b; // Igaz, a kisebb-vagy-egyenlő b-nél

a == c; // a egyenlő c-vel : igaz
a === c; //a egyenlő c-vel, és a típusuk is megegyezik (számok) : igaz (🌟)

a != b; // a nem-egyenlő b-vel : igaz
a != c; // a nem-egyenlő c-vel : hamis

d; // d értéke : igaz
e; // e értéke : hamis
```

Vigyázz, a szimpla `=` jelentése javascriptben a "legyen egyenlő"!

> 🌟 A teljesség kedvéért
>
> Kétféle összehasonlítás van, a `==` és a `===`. Nagy jelentősége egyelőre nincs a kettő közötti különbségnek számunkra, de azért néhány szót ejtsünk róla. Szóval, ez a rész az olvasmány :)
>
> **A változók nem csak számok lehetnek, hanem például karakterláncok is, például `let koszones = "Jó napot!"`.**
>
> Ez nyilván nem egyenlő 2-vel. De a "2" (mint szöveg) egyenlő a 2 számmal?
>
> A `==` megpróbál összehasonlítani különböző típusú változókat is, tehát a "2" szöveget és a 2 számot azonos típusúvá alakítja és így hasonlítja össze.
>
> A `===` ennél szigorúbb, ha nem azonos típusúak a változók, akkor nem egyenlőek.
>
> ```javascript
> let k = "2";
> let koszones = "Jó napot!";
>
> koszones == 2; // Hamis, a 2 szöveggé alakítva sem "Jó napot!"
> koszones === 2; // Hamis, az egyik szöveg, a másik szám
>
> k == 2; // Igaz - az egyik egy szám, a másik meg egy szöveg, de egyenlővé tehető
> k === 2; // Hamis, nem azonos a típusuk
> ```
>
> Ajánlott a `===`-et használni, hogy elkerüljünk bizonyos hibákat. Ha számokat hasonlítunk össze, ugyanazt az eredményt kapjuk.

Sok sikert! A következő leckében modellezzük a szabadesést! :)
