let size = 10 // The size of the squares

let centers = [[250, 250]] // An array of arrays, each containing the x and y coordinates of a center point
let resetCenters = false // A boolean to keep track of whether to reset the centers array

/**
 * Setup function runs once at the beginning of the sketch
 */
function setup() {
  createCanvas(500, 500)
  background(220)

  // Create a button to clear the canvas
  createButton('Clear').mousePressed(() => {
    background(220)
    centers = [[250, 250]]
    mouseWasPressed = false
    size = 10
  })
}

/**
 * Draw function runs continuously at 60fps
 */
function draw() {
  // If the mouse is pressed and the resetCenters boolean is true, clear the centers array
  if (mouseIsPressed && resetCenters) {
    centers = []
    size = 10
    resetCenters = false
  }

  // If the mouse is pressed and inside the canvas, add the current mouse position to the centers array
  if (
    mouseIsPressed &&
    mouseX > 0 &&
    mouseX < 500 &&
    mouseY > 0 &&
    mouseY < 500
  ) {
    centers.push([mouseX, mouseY])
  }

  // Draw a square at each center point
  for (let i = 0; i < centers.length; i++) {
    rect(centers[i][0] - size / 2, centers[i][1] - size / 2, size)
  }
}

// If the mouse wheel is scrolled, change the size of the squares
function mouseWheel(event) {
  resetCenters = true
  size += -event.delta / 10

  // Make sure the size is between 10 and 1000
  if (size < 10) size = 10
  if (size > 1000) size = 1000
}
