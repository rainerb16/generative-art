class Particle {
    constructor() {
        this.position = createVector(width/2, height/2);
        this.rays = [];
        for(let a = 0; a < 360; a+= 3) {
            this.rays.push(new Ray(this.position, radians(a)));
        }
    }

    look(bound) {
        for(let ray of this.rays) {
            let closest = null;
            let record = Infinity;
            for(let bound of bounds) {
                const pt = ray.cast(bound);
                if(pt) {
                    const d = p5.Vector.dist(this.position, pt);
                    if(d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if(closest) {
                stroke(150, 250, 50, 90);
                line(this.position.x, this.position.y, closest.x, closest.y);
            }
        }
    }

    update(x, y) {
        this.position.set(x, y);
    }

    show() {
        fill(50);
        ellipse(this.position.x, this.position.y, 4);
        for(let ray of this.rays) {
            ray.show();
            stroke(150, 250, 50, 90)
        }
    }
}