---
title: Egér
---

Itt az ideje, hogy interaktívabbá tegyük a programjainkat! Ebben a leckében az egérrel foglalkozunk.

# Az egér poziciója

Három különleges változót használhatunk : a `mouseX` és a `mouseY` a változók megadják az egérmutató aktuális koordinátáit. A `mouseIsPressed` változó pedig igaz (`true`) ha az egér bal gombja éppen le van nyomva, egyébként hamis(`false`)

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="250" data-height="750">
function setup() {
  createCanvas(200, 200);

  // A szövegeket igazítsa vízsintesen 
  // és függőlegesen középre
  textAlign(CENTER, CENTER);
  // A betűméret 20 legyen
  textSize(20);
}

function draw() {
  background(20);

  // Szürke legyen a szöveg színe
  fill("gray");
  // A textAlign miatt 
  // a (100,100) pont a szöveg közepén lesz
  text("Mozgasd az egeret\n és kattints", 100, 100);

  // Ha az egér le van nyomva a rajzoláskor
  if(mouseIsPressed){
    fill("red");
    circle(mouseX,mouseY,10);
  } else {
    fill("white");
    circle(mouseX,mouseY,30);
  }
}
</script>

Szöveget a `text(szöveg, x, y)` paranccsal írhatunk. Alapértelmezésben a szöveg bal alsó sarkának koordinátáit kell megadnunk. A `textAlign(CENTER,CENTER)` paranccsal ezt állítottam át - így a szöveg közepét adhatjuk meg, ez többnyire egyszerűbbé teszi a dolgunkat. A `textSize(betűméret)` parancs használata gondolom elég egyértelmű. A szövegben rejtőző `\n` sortörés, különben kilógna a szöveg.

Újdonság itt még az `else`. Az `if`-et már használtuk korábban is, de `else` nélkül: ezzel azt adhatjuk meg, mi történjen akkor, ha a feltétel nem igaz.

Használhatunk `else if`-et is, ennek a jelentése az egyébként ha. Ebből lehet több is.

```javascript
// Hogyan köszönjünk, ha "ido" ora van?
// A tegezodunk valtozo igaz vagy hamis
// Például:
let tegezodunk = false;
let ido = 15;

if (tegezodunk) {
  // Szia!
} else if (ido < 11) {
  // Jó reggelt!
} else if (ido > 18) {
  // Jó estét!
} else {
  // Jó napot!
}
```

{% include task.html content="Hogyan fogunk köszönni a fenti esetben és miért?" %}

Megváltoztathatjuk például a háttér színét az alapján, hogy éppen hol van az egér:

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="250" data-height="750">
function setup(){
  createCanvas(200,200);
  textAlign(CENTER,CENTER);
  textSize(20)
}
function draw(){
  // A háttér színe attól függjön, hol van az egér

  if(mouseX<100){ // Ha mouseX kisebb mint 50
    background("red")
  } else if (mouseY>100){ // Egyébként ha mouseY>100
    background("green")
  }
   else { // Egyébként (ha eddig egyik sem volt igaz)
    background("blue");
  }
}
</script>

Melyik részre kell vinnünk az egeret, hogy kék legyen a háttér? Miért?

# Rajzoljunk egérrel

Készítsünk egy egyszerű rajzprogramot:

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="300" data-height="500">
function setup(){
  createCanvas(250,250);
  background("gray");
}
function draw(){
  circle(mouseX, mouseY, 5);
}
</script>

A `background` utasítás most nem a draw részben van, hanem a setupban - így csak egyszer, az elején fut le. Ha a szokott módon a draw-ban lenne, akkor minden rajzolásnál letörölnénk a vásznat (tehát csak a legutolsó kört látnánk, amit most rajzoltunk fel!

{% include task.html content="Adjunk hozzá egy 'Mozgasd az egeret!' szöveget a rajzlap közepére! Ha az egér gombját lenyomjuk, akkor törlődjön a rajzlap!" %}

A `draw` függvény másodpercenként 60-szor fut le, így minél gyorsabban mozgatjuk az egeret, annál ritkábban lesznek körök.

Folytonos vonalhoz össze kell kötnünk azt a helyet, ahol az előző rajzoláskor volt az egér, azzal a hellyel, ahol most van. A p5 könyvtár nagyon megkönnyíti a dolgunk: a `pmouseX` és a `pmouseY` azok a koordináták, ahol egy képkockával korábban volt az egér! Tehát nincs más dolgunk, mint egy vonalat húzni:

```javascript
line(mouseX, mouseY, pmouseX, pmouseY);
```

## Kreatív rajzolás

Csinálj egy rajzoló programot, ahol az egér lenyomásával folytonos vonalat húzhatunk.

A programozásban talán azt szeretem legjobban, hogy az ember megvalósíthatja a kreatív ötleteit. Ez a feladat most kicsit kevésbé konkrét lesz mint az eddigiek.

Tehát adnék egy "szorgalmi" feladatot: Legyen benne valami egyéni ötlet, amitől ez a rajzprogram különleges lesz. Minden eddigi anyag parancs, lecke használható, illetve a [dokumentációból](https://p5js.org/reference/) is lehet inspirálódni.

Például valami ilyesmire gondoltam (ez az eddig tanultak alapján megvalósítható). Mozgasd az egeret és kattints a rajzoláshoz.

<iframe src="demos/draw.html" width="520" height="520"></iframe>

A szerkesztéshez használhatjátok a [p5.js Web Editort](https://editor.p5js.org/).

Nem szükséges regisztrálni a használatához. De ha regisztálsz (ingyenes), akkor ott is el tudod menteni amit alkottál (File / Save parancs), illetve a mentés után le tudod tölteni, vagy létrehozhatsz egy megosztható linket a (File / Share) paranccsal.

Az Auto-refresh-t bepipálva a programotok minden módosításkor újraindul, ez hasznos lehet.

{% include homework.html content="A kreatív rajzprogramot küldd el a Google Classroomban!" %}
