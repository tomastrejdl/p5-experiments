let slider1

let centers = [[250, 250]]
let mouseWasPressed = false

function setup() {
  createCanvas(500, 500)
  background(220)
  createButton('Clear').mousePressed(() => {
    background(220)
    centers = [[250, 250]]
    mouseWasPressed = false
    slider1.remove()
    slider1 = createSlider(0, 255, 10, 1)
  })
  slider1 = createSlider(0, 255, 10, 1)
}

function draw() {
  if (
    mouseIsPressed &&
    mouseX > 0 &&
    mouseX < 500 &&
    mouseY > 0 &&
    mouseY < 500
  ) {
    centers.push([mouseX, mouseY])
  }

  for (let i = 0; i < centers.length; i++) {
    rect(
      centers[i][0] - slider1.value() / 2,
      centers[i][1] - slider1.value() / 2,
      slider1.value()
    )
  }

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
