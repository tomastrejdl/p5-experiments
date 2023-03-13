let val = 10

let centers = [[250, 250]]
let resetCenteres = false 

function setup() {
  createCanvas(500, 500)
  background(220)
  createButton('Clear').mousePressed(() => {
    background(220)
    centers = [[250, 250]]
    mouseWasPressed = false
    val = 10
  })
}

function draw() {
  if(mouseIsPressed && resetCenteres) {
    centers = []
    val = 10
    resetCenteres = false
  }

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
      centers[i][0] - val / 2,
      centers[i][1] - val / 2,
      val
    )
  }
}

function mouseWheel(event) {
  resetCenteres = true
  val += - event.delta / 10
  if (val < 10) val = 10
  if (val > 1000) val = 1000
}