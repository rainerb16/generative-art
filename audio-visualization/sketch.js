function setup() {
    createCanvas(500, 500, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(30)

    rotateX(60)

    noFill()
    stroke(255)
    strokeWeight(2)

    for(let i = 0; i < 80; i++) {
        let r = map(sin(frameCount /2), -1, 1, 100, 150)
        let g = map(i, 0, 50, 150, 200)
        let b = map(cos(frameCount), -1, 1, 250, 150)

        stroke(r, g, b)
        rotate(frameCount /30)

        beginShape()
        for(let j = 0; j < 360; j += 250) {
            let rad = 1 * 170
            let x = rad * cos(j + i)
            let y = rad * sin(i + j)
            let z = sin(frameCount * 4 + i * 10) * 50

            vertex(x, y, z)
        }
        endShape(CLOSE)
    } 
}
