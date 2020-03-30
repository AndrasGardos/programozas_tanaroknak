---
title: Kosárlabdázzunk - I. rész - MEGOLDÁS
---

Több lehetséges megoldása is volt a feladatnak! Ha működik, akkor az már biztosan egy jó megoldás, persze vannak elegánsabb és kevésbé elegáns megoldások :)

### Nézzük végig a kódot!

Létrehoztunk egy x és egy v változót, aminek egy kezdeti értéket adtunk. Majd a `setup` során létrehoztuk a rajzvásznat. (Ezeken a részeken nem kellett módosítani)

```javascript
let x = 10;
let v = 2;

function setup() {
  createCanvas(200, 200);
}
```

A rajzolás függvény minden képkocka megrajzolásánál, azaz másodpercenként kb. 60-szor lefut. Először is az egész rajzlapot beszínezzük világoszöldre, majd az x értékét megnöveljük v-vel, azaz a sebességnek megfelelően elmozdítjuk a labdát.
(Valójában nem mozdítjuk, hanem megjegyezzük, hogy a következő képkockában egy kicsit arrébb rajzoljuk fel)

```javascript
function draw() {
  background("lightgreen");
  x = x + v;
```

Az x értéke így minden képkockánál egyre nagyobb lesz. Minden képkocka megrajzolásánál le kell ellenőriznünk, hogy a labda kívül van-e a vászon jobb szélén.

A rajzlap szélessége 200, a kör átmérője 20, és a középpontját rajzoljuk meg x-nél. Tehát akkor van pont a vászon szélén, ha a középpontja, x 190-nél van. Ha ennyi (vagy ennél több), akkor ezentúl az ellenkező irányba kell mennünk.

Ha a `v` 2, akkor mindig ennyit adunk x-hez, tehát jobbra fogunk menni. Ha balra akarunk menni, akkor legyen a `v` -2.

Vagyis abszolútértékre ugyanakkora mint eddig, csak az előjele más (matekosan: ellentett). Így még jobb, ha nem írjuk bele a kettőt és a mínusz kettőt:

```javascript
if (x >= 190) {
  v = -v;
}
```

Ez azért jobb megoldás, mert ha a kód tetején más kezdősebességet adunk meg (pl. `let v = 3;`), akkor is működni fog.

> Emlékeztető: a javascript programnyelven az `=` azt jelenti, hogy "legyen egyenlő"! Tehát `v = -v;` azt jelenti, hogy "v legyen egyenlő mínusz egyszer az eddigi v-vel". Írhattuk volna azt is, hogy `v = -1 * v;`, ugyanazt jelenti.

Az ütközés után negatív lesz a v, balra fog menni a labdánk. Meg kell néznünk azt is, hogy a bal szélen van-e (vagy azon túl). A bal szél 0-nál van, a labda átmérője 20, tehát akkor van a szélén, ha x egyenlő tízzel.

```javascript
if (x <= 10) {
  v = -v;
}
```

Ebben az esetben szintén meg kell fordítanunk a sebességet (`-2`-ről `+2`-re).

Majd végül fel is kell rajzolnunk a labdát, és bezárnunk a `draw` függvényt egy kacsacsőrrel:

```javascript
  circle(x,100,20);
}
```

### Miért kell a kisebb-vagy-egyenlő? Nem elég az egyenlőséget vizsgálni?

Több megoldásban láttam, hogy csak egyenlőséget vizsgáltak. A konkrét feladatban működik is, de van egy nagy buktatója:

`x` nem folyamatosan változik, hanem minden képkockánál 2-t "ugrik" jobbra. Tehát:
0, 2, 4, 6, ..., 198,200. És ha `x == 200` akkor visszafordulunk.

Mi lenne, ha egy gyorsabb labdát akarunk? Például `let v = 3` ?
Ebben az esetben `x` értékei 0, 3, 6, 9 ... 198, 201, 203, 205, 208...
hoppá. Átugrotta ez a galád labda a 200-at, soha nem fog visszapattanni...

## A teljes megoldás:

<script type="text/p5" data-p5-version="1.0.0" data-preview-width="250" data-height="650">
let x = 10;
let v = 2;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("lightgreen");
  x = x + v;

  if(x >= 190){
      v = -v;
  }

  if(x <= 10){
      v = -v;
  }
  
  circle(x,100,20);
}

</script>
