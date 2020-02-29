var myFont;
var minHeight;

function preload() {
  //myFont = loadFont("SUBWT___.ttf");
}

function setup() {
  frameRate(30);
  angleMode(DEGREES);
}

let date = new Date();
let ms = date.getMilliseconds();
let sc = date.getSeconds() + ms / 1000;
let mn = date.getMinutes() + sc / 60;
let hr = date.getHours() + mn / 60;

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-90);

  if (windowWidth < windowHeight) {
    minHeight = windowWidth;
  } else {
    minHeight = windowHeight;
  }

  //-----CIRCLES------------------------------------------------------------------------
  date = new Date();
  ms = date.getMilliseconds();
  sc = date.getSeconds() + ms / 1000;
  mn = date.getMinutes() + sc / 60;
  hr = date.getHours() + mn / 60;

  strokeWeight(minHeight / 80);

  noFill();
  stroke(15, 0, 0);
  arc(0, 0, minHeight / 1.5, minHeight / 1.5, 0, 359);
  stroke(20, 0, 0);
  arc(0, 0, minHeight / 1.4, minHeight / 1.4, 0, 359);
  stroke(25, 0, 0);
  arc(0, 0, minHeight / 1.3, minHeight / 1.3, 0, 359);

  stroke(200, 0, 0);
  let secondAngle = map(sc, 0, 60, 1, 359);
  endCircle(sc, secondAngle, 1.3);
  stroke(150, 0, 0);
  let minuteAngle = map(mn, 0, 60, 1, 359);
  endCircle(mn * 60, minuteAngle, 1.4);
  stroke(100, 0, 0);
  let hourAngle = map(hr % 12, 0, 12, 1, 359);
  endCircle(hr % 12 * 60 * 60, hourAngle, 1.5);


  //-----LINES--------------------------------------------------------------------------
  stroke(100, 0, 0);
  for (let i = 0; i < 12; i++) {
    rotate(30);
    line(0, -minHeight / 2.4, 0, -minHeight / 2.4);
  }

  stroke(150, 0, 0);
  for (let i = 0; i < 4; i++) {
    rotate(90);
    line(0, -minHeight / 2.4, 0, -minHeight / 2.37);
  }


  //-----TEXT---------------------------------------------------------------------------
  rotate(90);
  fill(200, 0, 0);
  noStroke();
  textAlign(CENTER);
  textSize(minHeight / 7);
  textFont("TW Cen mt");

  let txthr = ('0' + date.getHours()).substr(-2);
  let txtmn = ('0' + date.getMinutes()).substr(-2);
  let txtsc = ('0' + date.getSeconds()).substr(-2);

  text(txthr + ':' + txtmn + ':' + txtsc, 0, minHeight / 28);
}

//-----FUNCTIONS----------------------------------------------------------------------
function endCircle(speed, timeAngle, radius) {
  let angle = -pow(2, -speed * 1.5 + 8.5) + 360;
  if(angle <= timeAngle) {
		timeAngle -= 360;
  }
  arc(0, 0, minHeight / radius, minHeight / radius, angle, timeAngle);
}