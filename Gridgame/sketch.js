// gridgame

let cellAmount = 500;
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
  noStroke();
  for (let y=0; y<cellAmount; y++) {
    for (let x=0; x<cellAmount; x++) {
      if(grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill(38, 22, 1);
      }
      else if (grid[y][x] === 2) {
        fill(64, 41, 12);
      }
      else if (grid[y][x] === 3) {
        fill(102,71,31);
      }
      else if (grid[y][x] === 4) {
        fill(130, 100, 60);
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
        newArray[y].push(1);
      }
      else {
        newArray[y].push(2);
      }
    }
  }
  return newArray;
}
