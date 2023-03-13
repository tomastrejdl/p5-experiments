function setup() {
    createCanvas(500, 500)
    background(220)

    // Add a p5.js button that clears the canvas
    let button = createButton('Clear')
    button.mousePressed(() => {
        background(220)
    })
}

function draw() {
    // A p5.js draw function that creates a drawing canvas, where you can draw with your mouse and the line changes color randomly
    stroke(random(255), random(255), random(255))
    line(mouseX, mouseY, pmouseX, pmouseY)

}