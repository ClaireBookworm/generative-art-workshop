function setup() {
  createCanvas(400,400);
  noLoop();
}
function draw() {
  background('PEACHPUFF');
  var step = 30;
  for (var x=0; x<400; x=x+step) {
    for(var y=0;y<400;y=y+step) {
      strokeWeight(3);
      if(random()>0.5) {
        line(x,y,x+step,y+step);
      }
      else {
        line(x+step,y,x,y+step);
      }
    }
  }
}
