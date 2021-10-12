// button oop demo

let backgroundColor = "white";
let buttonOne, buttonTwo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonOne = new Button(300, 400, 200, 100);
  buttonTwo = new Button(300, 600, 200, 100);
  buttonTwo.notHoveredColor = "#9d5c63";
  buttonTwo.hoverColor = "#d6e3f8";
}

function draw() {
  background(backgroundColor);
  buttonOne.display();
  buttonTwo.display();
}

function mousePressed() {
  if (buttonOne.checkIfInside(mouseX, mouseY)) {
    backgroundColor = "red";
  }
  else if (buttonTwo.checkIfInside(mouseX, mouseY)) {
    backgroundColor = "black";
  }
}

class Button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.hoverColor = "#dccfec";
    this.notHoveredColor = "#4f517d";
  }

  display() {
    if (this.checkIfInside(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.notHoveredColor);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  checkIfInside(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }
}