---
title: Kosárlabdázzunk - II. rész
---

Ha elengedünk egy labdát, akkor - ha ezt nem a világűr elhagyatottabb pontjain, hanem a Földön tesszük - a labda szabadon fog esni. Azaz nem csak a helye fog folyamatosan változni, hanem a sebessége is folyamatosan növekedni fog.

Az előző leckében a **tökéletesen rugalmas** ütközést modelleztük - a labda sebességének iránya megváltozott az ütközéstől, de a nagysága ugyanakkora maradt. Ez a valóságban nem így szokott lenni: a labda sebességének nagysága minden pattanáskor kisebb lesz, nem pattog örökké.

# Pattogó labda

Tegyük fel, hogy minden ütközéskor a sebessége 80%-a lesz az eredeti sebességének. Tehát 10 pixel lefelé a sebessége --> ütközés --> 8 pixel felfelé.

{% include task.html content="Fejezd be a lenti kódot! A labda szabadon essen lefelé, majd a Földre érve pattanjon vissza, kisebb sebességgel. " %}

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="250" data-height="750">

let y = 20; // A labda poziciója az y tengely mentén
let vy = 0; // A labda y irányú sebessége (kezdetben 0)
let g = 0.2; // A nehézségi gyorsulás

function setup() {
  createCanvas(200, 400);
}

function draw() {
  background("SkyBlue");
  // Rajzoljuk meg a földet y = 350-nél
  line(0,350,400,350);
  fill("DarkSlateGray");
  rect(0,350,200,50);

  // Növeljük meg a labda sebességét
  
  // Változtassuk meg a pozicióját a sebesség alapján
  
  // Ellenőrizzük, hogy nem ütközött-e a talajjal
  // ha igen, akkor a sebessége legyen az eddigi sebesség ellentetjének
  // 80 % - a (és tegyük vissza a talajra)
  
  //Rajzoljuk meg a labdát
  fill("OrangeRed");
  circle(100,y,20);
}

</script>

Az energiamegmaradás miatt láthatjuk, hogy a labda sohasem fog magasabbra pattanni, mint ahol leejtettük. A g értékét változtatva megnézhetjük, hogyan viselkedne a labda kisebb és nagyobb gravitáció esetén.

Ha a `vy` értékét kezdetben nem 0-ra állítjuk, akkor függőleges felfelé vagy lefelé hajítást fogunk kapni.

🌟 Igazán szép megoldás az, ha minél kevesebb konkrét számot írunk a kódunkba. Próbáld meg, hogy az ütközéskor bekövetkező energiaveszteség is egy (a kód tetején, könnyen megváltoztatható) változó legyen.

# Vízszintes hajítás

Az előző leckében bemutatott animációban egy vízszintes hajítás volt.

<iframe width="680" height="340" src="demos/bounce.html"></iframe>

Ha a labdát nem elengedjük, hanem a föld felszínével párhuzamosan eldobjuk,(és a légellenállástól nagyvonalúan eltekintünk) akkor:

- Víszintes irányban egyenes vonalú egyenletes mozgást végez ([ld. előző lecke](02-kosarlabda-I.html))
- Függőlegesen pedig szabadon esik (ld. fent)

A tényleges mozgása ennek a kettőnek a kombinációja lesz. Most már csak össze kell rakni a két dolgot...

{% include homework.html content="Fejezd be a lenti kódot! A labda a bal felső sarokból jobbra elhajítva pattogjon. A kész kódot másold ki, és töltsd fel a Google Classroomba, egy új dokumentumba. " %}

Ahogy eddig is, itt is érdemes kis lépésekben haladni, és mindig kipróbálni hogy minden úgy működik-e, ahogy elgondoltuk.

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="400" data-height="950">
// Sok sikert ! ;)
let x = 20; // A labda poziciója az x tengely mentén
let y = 20; // A labda poziciója az y tengely mentén
let vx = 1; // A labda x irányú sebessége (jobbra megy)
let vy = 0; // A labda y irányú sebessége (kezdetben 0)
let g = 0.2; // A nehézségi gyorsulás

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("SkyBlue");
  // Rajzoljuk meg a földet y = 350-nél
  line(0,350,400,350);
  fill("DarkSlateGray");
  rect(0,350,400,50);

  // Növeljük meg a labda y irányú sebességét:
  
  // Változtassuk meg az x és y pozicióját
  // a vx és a vy alapján:
  
  // Ellenőrizzük, hogy nem ütközött-e a talajjal
  // ha igen, akkor az y irányú sebessége legyen 
  // az eddigi sebesség ellentetjének 80 %-a
  // és tegyük vissza a talajra:
  
  // Ellenőrizzük, hogy nem ment-e ki a jobb szélen
  // Ha igen, tegyük vissza a bal felső sarokba
  // És állítsuk vissza vy-t 0-ra:
  
  //Rajzoljuk meg a labdát
  fill("OrangeRed");
  circle(x,y,20);
}
