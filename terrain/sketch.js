// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateTerrain(numberOfRectangles);
}

function draw() {
  background(220);
  displayTerrain();
}

function displayTerrain() {
  let rectWidth = width/numberOfRectangles;
  fill("black");
  for (let i=0; i<heights.length; i++) {
    rect(i*rectWidth, height-heights[i], rectWidth, heights[i]);
  }
}

function generateTerrain(howMany) {
  let time = 0;
  let dTime = 0.0025;

  for(let i=0; i<howMany; i++) {
    let currentHeight = noise(time)*height;
    heights.push(currentHeight);
    time += dTime;
  }
}