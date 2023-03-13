let slider1 // A slider to control the size of the squares

let centers = [[250, 250]] // An array of arrays, each containing the x and y coordinates of a center point
let mouseWasPressed = false // A boolean to keep track of whether the mouse was pressed previously

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
    slider1.remove()
    slider1 = createSlider(0, 255, 10, 1)
  })

  // Create a slider to control the size of the squares
  slider1 = createSlider(0, 255, 10, 1)
}

/**
 * Draw function runs continuously at 60fps
 */
function draw() {
  if (
    mouseIsPressed &&
    mouseX > 0 &&
    mouseX < 500 &&
    mouseY > 0 &&
    mouseY < 500
  ) {
    // If the mouse is pressed and inside the canvas, add the current mouse position to the centers array
    centers.push([mouseX, mouseY])
  }

  // Draw a square at each center point
  for (let i = 0; i < centers.length; i++) {
    rect(
      centers[i][0] - slider1.value() / 2,
      centers[i][1] - slider1.value() / 2,
      slider1.value()
    )
  }

  // If the mouse is pressed outside the canvas, clear the centers array
  if (
    (slider1.mousePressed && mouseX > 500) ||
    mouseX < 0 ||
    mouseY > 500 ||
    mouseY < 0
  ) {
    if (mouseIsPressed) mouseWasPressed = true
    if (mouseWasPressed && !mouseIsPressed) {
      mouseWasPressed = false
      centers = []
      slider1.remove()
      slider1 = createSlider(0, 255, 10, 1)
    }
  }
}
