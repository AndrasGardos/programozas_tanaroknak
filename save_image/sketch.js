let framerate = 30;
var capturer = new CCapture({
  format: "webm",
  framerate: 30,
  name: "vonal",
  quality: 100
});

let canvas;
let T = 0;
let v = 2;
function setup() {
  let p5canvas = createCanvas(900, 400);
  canvas = p5canvas.canvas;

  capturer.start(canvas);
  console.log("Capturing started");
  for (var T = 0; T < 1000; T++) {
    draw();
  }

  noFill();
}

var t = 0;
var data = [];
function draw() {
  T++;
  t += TWO_PI / 100;
  background(0);
  stroke("white");
  translate(200, 200);
  var x = 0;
  var y = 0;

  for (var i = 0; i < 30; i++) {
    //var n = i*2+1;//Négyzet
    var n = i + 1; //Fűrész
    ellipse(x, y, (2 * 100) / n);
    var x2 = x + (100 / n) * cos(t * n);
    var y2 = y + (100 / n) * sin(t * n);
    line(x, y, x2, y2);
    x = x2;
    y = y2;
  }

  stroke("red");
  line(x, y, 250, y);
  data.unshift(y);
  stroke("blue");
  beginShape();
  data.forEach((d, x) => {
    vertex(250 + x, d);
  });
  endShape();

  if (data.length > 450) {
    data.pop();
  }
  if (T == 200) {
    capturer.stop();
    capturer.save();
  }
}
