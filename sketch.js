let a1;
let a2;
let a3;
let from;
let value;
let colorValue;
function setup() {
  createCanvas(800, 800);
  a1 = 0;
  a2 = 0;
  a3 = 0;
  value = 190;
  colorValue = 255;
  from = color(255, 0, 0);

}

function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function mouseWheel(event) {
  value = value + 25;
  if (value > 255) {
    value = 0;
  }
}

function mouseClicked() {
  from = color(random(255), random(255), random(255));
}

function draw() {
  background(0);
  fill(from);
  translate(height / 2, width / 2);
  stroke(color(0, 0, 255));
  for (var i = 0; i < 200; i++) {
    a3 = map(i, 0, 200, 0, PI / 2);
    rotate(frameCount * 0.01);
    if (mouseIsPressed) {
      rect(0, value, 25, 25);
    } else{
      ellipse(0, value, random(25), 30);
    }
    push();
    stroke(color(random(255), random(255), random(255)));
    fill(color(random(255), random(255), random(255)))
    for (var j = 0; j < 20; j++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(millis() * 0.001 + j) * 100);
      x = randomGaussian(5, 5);
      ellipse(0, value + 30, x, x);
    }
    pop();

  }

}
