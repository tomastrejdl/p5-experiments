function setup() {
    createCanvas(500, 500)
    background(220)
}

function draw() {
    // A p5.js draw function to graw the golden ratio spiral
    let x = 0
    let y = 0
    let r = 0
    let angle = 0
    let goldenRatio = (1 + sqrt(5)) / 2
    let goldenAngle = atan(1 / goldenRatio)
    let goldenRadius = 0.5 / sin(goldenAngle)
    let goldenSpiral = []
    for (let i = 0; i < 1000; i++) {
        angle += goldenAngle
        r += goldenRadius
        x = r * cos(angle)
        y = r * sin(angle)
        goldenSpiral.push([x, y])
    }
    for (let i = 1; i < goldenSpiral.length; i++) {
        line(goldenSpiral[i - 1][0], goldenSpiral[i - 1][1], goldenSpiral[i][0], goldenSpiral[i][1])
    }
}
