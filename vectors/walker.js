class Walker {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.vel = createVector(1, -1);
    }
    update() {
        this.position.add(this.vel); 
    }
    show() {
        stroke(255, 100);
        strokeWeight(2);
        point(this.position.x, this.position.y);
    }
}