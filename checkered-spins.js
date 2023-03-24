// find the link to the p5 editor link here:
// https://editor.p5js.org/ClaireBookworm/sketches/h7NYjvFof

function setup() {
  createCanvas(400, 400);
  noLoop();
  rectMode(CENTER);
}
function draw() {
  background(229, 232, 182);
  for (var x = 0; x < 400; x = x + step) {
    var step = 40;
    for (var y = 0; y < 400; y = y + step) {
      drawRandomSquare(x, y, step);
    }
  }
}
function drawRandomSquare(x, y, step) {
  fill(125, 134, 156);
  stroke(88, 105, 148);
  push();
  translate(x + step / 2, y + step / 2);
  var maxRotation = map(y, 0, 400, 0, PI);
  rotate(random(0, maxRotation));
  rect(0, 0, step, step);
  pop();
}
