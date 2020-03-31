---
title: Kosárlabdázzunk - II. rész
---

Ha elengedünk egy labdát, akkor - ha ezt nem a világűr elhagyatottabb pontjain, hanem a Földön tesszük - a labda szabadon fog esni. Azaz nem csak a helye fog folyamatosan változni, hanem a sebessége is folyamatosan növekedni fog.

Az előző leckében a **tökéletesen rugalmas** ütközést modelleztük - a labda sebességének iránya megváltozott az ütközéstől, de a nagysága ugyanakkora maradt. Ez a valóságban nem így szokott lenni: a labda sebességének nagysága minden pattanáskor kisebb lesz, nem pattog örökké.

# Pattogó labda

> _Először szimuláljuk azt, hogy ha egy kosárlabdát egyszerűen elengedünk egy bizonyos magasságban. A sebessége az elengedés pillanatában nulla, de folyamatosan növekszik, míg el nem éri a földet. Ekkor a sebesség iránya megfordul, a nagysága kicsit kevesebb lesz, visszapattan, (de nem olyan magasra, mint ahol elengedtük). Majd egyre kisebb magasságokba emelkedik fel, a pattogások során energiát veszít._

Minden képkocka megrajzolásakor meg kell növelnünk a labda függőleges sebességét a nehézségi gyorsulásnak megfelelően, hiszen a szabadon eső testek sebessége folyamatosan növekszik.

## Visszapattanás

Ha a labda a föld szintjén (y = 350) vagy az alatt van, akkor a függőleges sebessége (`vy`) változzon meg.

Tegyük fel, hogy minden ütközéskor a sebessége 80%-a lesz az eredeti sebességének. Tehát például 10 pixel lefelé a sebessége --> ütközés --> 8 pixel felfelé. Emlékeztetőül: a pozitív `vy` azt jelenti, hogy a labda lefelé, a negatív pedig azt, hogy felfelé mozog.

A visszapattanáskor a függőleges sebesség ellenkező előjelű legyen, és az abszolútértéke az eddigi `vy` 80%-a (ehhez meg kell szoroznunk az eddigi értéket egy negatív számmal). Tegyük vissza a földre a visszapattanáskor (ha esetleg a föld alá ment volna): az `y` értékét is változtassuk meg a talaj helyzetének megfelelően.

{% include task.html content="Fejezd be a lenti kódot! A labda szabadon essen lefelé, majd a Földre érve pattanjon vissza, kisebb sebességgel. " %}

Haladj kisebb lépésekben! _A kommentek és az előző lecke sokat segítenek ;)_

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

  // Növeljük meg a labda sebességét g-vel:
  
  // Változtassuk meg a pozícióját a sebesség alapján:
  
  // Ellenőrizzük, hogy nem ütközött-e a talajjal
  // ha igen, akkor a sebessége legyen az eddigi sebesség ellentetjének
  // 80 % - a (és tegyük vissza a talajra):
  
  //Rajzoljuk meg a labdát
  fill("OrangeRed");
  circle(100,y,20);
}

</script>

> A `rect(x,y,szélesség, magasság)` paranccsal téglalapot rajzolhatunk (föld). Az x és az y itt a téglalap bal-felső sarkát adja meg.

Az energiamegmaradás miatt láthatjuk, hogy a labda sohasem fog magasabbra pattanni, mint ahol leejtettük. A g értékét változtatva megnézhetjük, hogyan viselkedne a labda kisebb és nagyobb gravitáció esetén.

Ha a `vy` értékét kezdetben nem 0-ra állítjuk, akkor függőleges felfelé vagy lefelé hajítást fogunk kapni.

> 🌟 Igazán elegáns megoldás az, ha minél kevesebb konkrét számot írunk a kódunkba. Ha működik a programod, próbáld meg úgy módosítani, hogy az ütközéskor bekövetkező sebességveszteség is egy, a kód tetején, könnyen megváltoztatható változó legyen.

# Vízszintes hajítás

> _A vízszintes hajítás abban különbözik a szabadeséstől, hogy a labdát nem csak elengedjük, hanem valamilyen sebességgel a talajjal párhuzamosan eldobjuk._

Az előző leckében bemutatott animációban egy vízszintes hajítás volt:

<iframe width="680" height="340" src="demos/bounce.html"></iframe>

Hogyan szimulálhatunk vízszintes hajítást?

Ha a labdát nem elengedjük, hanem a föld felszínével párhuzamosan eldobjuk,(és a légellenállástól nagyvonalúan eltekintünk) akkor:

- Víszintes irányban egyenes vonalú egyenletes mozgást végez ([ld. előző lecke](02-kosarlabda-I.html))
- Függőlegesen pedig szabadon esik (ld. a fenti feladatot)

A tényleges mozgása ennek a kettőnek a kombinációja lesz, tehát `y` tengely mentén szabadesés és pattogás, `x` tengely mentén pedig egyenes vonalú egyenletes mozgás.

{% include homework.html content="Fejezd be a lenti kódot! A labda a bal felső sarokból jobbra elhajítva pattogjon. A kész kódot másold ki, és töltsd fel a Google Classroomba, egy új dokumentumba. " %}

Ahogy eddig is, itt is érdemes kis lépésekben haladni, és mindig kipróbálni hogy minden úgy működik-e, ahogy elgondoltuk. _A kommentek itt is segítenek!_

Ez egy nehezebb, összetettebb feladat, de érdemes legalább megpróbálni. A megoldásokat ismét felteszem a határidő után.

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

  // Növeljük meg a labda y irányú sebességét (vy) a gravitáció miatt:
  
  // Változtassuk meg az x és y pozícióját
  // a vx és a vy alapján:
  

  // (^^ ha eddig megvan, érdemes kipróbálni)
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
