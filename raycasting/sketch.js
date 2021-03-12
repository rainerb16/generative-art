let bounds = [];
let ray;
let particle;
let xoff = 0;
let yoff = 1000;

function setup() {
  createCanvas(500, 500);
  for(let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    bounds[i] = new Boundary(x1, y1, x2, y2)
  }
  bounds.push(new Boundary(0, 0, width, 0));
  bounds.push(new Boundary(width, 0, width, height));
  bounds.push(new Boundary(width, height, 0, height));
  bounds.push(new Boundary(0, height, 0, 0));

  particle = new Particle();
}

function draw() {
  background(0);
  for(let bound of bounds) {
    bound.show();
  }
  particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.show();
  particle.look(bounds);

  xoff += 0.01;
  yoff += 0.01;
  // ray.show();
  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(bound);
  // console.log(pt)
  // if(pt) {
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
}
