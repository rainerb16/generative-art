function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  translate(width/2, height/2);
  
  // let v = createVector(random(-100, 100), random(-100, 100));
  v = p5.Vector.random2D();
  v.mult(random(60, 110));

  strokeWeight(2);
  stroke(11, 255, 1, 30);
  line(0, 0, v.x, v.y);
}
