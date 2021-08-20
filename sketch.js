function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {
  background("black");

  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sc = second();

  let color1 = [
    "#f72585",
    "#b5179e",
    "#7209b7",
    "#560bad",
    "#480ca8",
    "#3a0ca3",
    "#3f37c9",
    "#4361ee",
    "#4895ef",
    "#4cc9f0",
  ];
  let color2 = random(color1);

  noFill();
  strokeWeight(25);

  if (sc >= 55 && sc <= 59) {
    color2 = random(color1);
    stroke(color2);
  } else {
    stroke("#D8097E");
  }

  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 800, 800, 0, secondAngle);

  push();
  rotate(secondAngle);
  line(0, 0, 200, 0);
  pop();

  stroke("#8C579C");
  let minuteAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 700, 700, 0, minuteAngle);

  push();
  rotate(minuteAngle);
  line(0, 0, 150, 0);
  pop();

  stroke("#24468E");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 600, 600, 0, hourAngle);

  push();
  rotate(hourAngle);
  line(0, 0, 100, 0);
  pop();

  stroke(color2);
  point(0, 0);
  push();
  fill("white");
  strokeWeight(5);
  textSize(40);
  rotate(90);
  text(hr + ":" + min + ":" + sc, -70, 100);
  pop();
}
