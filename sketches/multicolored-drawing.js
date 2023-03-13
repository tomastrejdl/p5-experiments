let lineStartX = 0, lineStartY = 0
let r = 128, g = 128, b = 128
let weight = 3

function setup() {
  createCanvas(500, 500)
  background(220)
  createButton('Clear').mousePressed(() => {
    background(220)
    lineStartX = 0
    lineStartY = 0
  })
}

function draw() {
  if (mouseIsPressed) {
    if (lineStartX !== 0 && lineStartY !== 0) {
      if (mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 500) {
        ;(r += random(-100, 100)),
          (g += random(-100, 100)),
          (b += random(-100, 100))
        if (r < 0) r = 0
        if (r > 255) r = 255
        if (g < 0) g = 0
        if (g > 255) g = 255
        if (b < 0) b = 0
        if (b > 255) b = 255
        const l = line(lineStartX, lineStartY, mouseX, mouseY)
        l.stroke(r, g, b)
        weight += random(-2, 2)
        if (weight < 0) weight = 1
        if (weight > 20) weight = 20
        l.strokeWeight(weight)

        lineStartX = mouseX
        lineStartY = mouseY
      }
    } else {
      if (mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 500) {
        lineStartX = mouseX
        lineStartY = mouseY
      }
    }
  } else {
    lineStartX = 0
    lineStartY = 0
  }
}
