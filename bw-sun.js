function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
  const ctx = drawingContext;
  const x = width / 2;
  const y = height / 2;
  const squareSideDotsCount = 30;
  
  const squareVertices = [];
  let startAngle = 45;
  for (let i = 0; i < 4; i += 1) {
    squareVertices.push({
      x: 400 * cos(startAngle),
      y: 400 * sin(startAngle),
    });
    startAngle += 360 / 4;
  }
     
  const square = [];
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < squareSideDotsCount; j += 1) {  
      const x = lerp(
        squareVertices[i].x,
        squareVertices[(i + 1) % squareVertices.length].x,
        j / squareSideDotsCount,
      );
      const y = lerp(
        squareVertices[i].y,
        squareVertices[(i + 1) % squareVertices.length].y,
        j / squareSideDotsCount,
      );
      square.push({ x, y });
    }
  }
  
  push();
  translate(x, y);
   for (let i = 0; i < square.length; i += 1) {
     push();
     noStroke();
     if (i % 2 === 0) fill(0);
     else fill(255);
     beginShape();
     vertex(square[i].x, square[i].y);
     vertex(0, 0);
     vertex(
        square[(i + 1) % square.length].x,
        square[(i + 1) % square.length].y,
      );
     endShape(CLOSE);
     pop();
   }
  pop();
}
