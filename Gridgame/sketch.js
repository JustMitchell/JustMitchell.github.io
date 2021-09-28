// gridgame

let cellAmount = 100;
let grid;
let cellSize;

function setup() {
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);
  }
  else{
    createCanvas(windowWidth, windowWidth);
  }

  grid = createArray(cellAmount);
  cellSize = width / cellAmount;
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for (let y=0; y<cellAmount; y++) {
    for (let x=0; x<cellAmount; x++) {
      if(grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill(38, 22, 1);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createArray(howBig) {
  let newArray = [];
  for (let y=0; y<howBig; y++) {
    newArray.push([]);
    for (let x=0; x<howBig; x++) {
      if (random(0, 100) > 50) {
        newArray[y].push(0);
      }
      else {
        newArray[y].push(1);
      }
    }
  }
  return newArray;
}
