let lineStartX = 0 // The x position of the start of the line
let lineStartY = 0 // The y position of the start of the line

// RGB (red, green, blue) color values for the line (between 0-255)
let r = 128
let g = 128
let b = 128

let lineWeight = 3 // The weight/width of the line

/**
 * Setup function runs once at the beginning of the sketch
 */
function setup() {
  createCanvas(500, 500)
  background(220)

  // Create a button to clear the canvas
  createButton('Clear').mousePressed(() => {
    background(220)
    lineStartX = 0
    lineStartY = 0
  })
}

/**
 * Draw function runs continuously at 60fps
 */
function draw() {
  if (mouseIsPressed) {
    // If the mouse is pressed, draw a line from the previous mouse position to the current mouse position

    if (lineStartX !== 0 && lineStartY !== 0) {
      // If the line start position is not 0, draw a line

      if (mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 500) {
        //  If the mouse is inside the canvas, draw a line

        // Randomize the color
        r += random(-100, 100)
        g += random(-100, 100)
        b += random(-100, 100)

        // Make sure the color values are between 0 and 255
        if (r < 0) r = 0
        if (r > 255) r = 255
        if (g < 0) g = 0
        if (g > 255) g = 255
        if (b < 0) b = 0
        if (b > 255) b = 255

        // Draw the line
        const l = line(lineStartX, lineStartY, mouseX, mouseY)

        // Set the line color
        l.stroke(r, g, b)

        // Randomize the line weight
        lineWeight += random(-2, 2)

        // Make sure the line weight is between 1 and 20
        if (lineWeight < 0) lineWeight = 1
        if (lineWeight > 20) lineWeight = 20

        // Set the line weight
        l.strokeWeight(lineWeight)

        // Set the line start position to the current mouse position
        lineStartX = mouseX
        lineStartY = mouseY
      }
    } else {
      // If the line start position is 0, set the line start position to the current mouse position

      if (mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 500) {
        // If the mouse is inside the canvas, set the line start position to the current mouse position
        lineStartX = mouseX
        lineStartY = mouseY
      }
    }
  } else {
    // If the mouse is not pressed, reset the line start position
    lineStartX = 0
    lineStartY = 0
  }
}
