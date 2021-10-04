// gridgame

let cellAmount = 500;
let grid;
let cellSize;

function setup() {
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
  }
  else{
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }

  grid = createArray(cellAmount);
  cellSize = width / cellAmount;
}

function draw() {
  background(220);
  showGrid();
}

function clean () {
  if ( dist(mouseX, mouseY, grid[y][x], grid[y][x]) > 100) {
    grid[y][x] -= 1;
  }
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
      
      if (random(0, 100) < 25) {
        newArray[y].push(1);
      }
      else if (random(0, 100) > 25 && random(0,100) < 50) {
        newArray[y].push(2);
      }
      else if (random(0,100) > 50 && random(0, 100) < 75) {
        newArray[y].push(3);
      }
      else {
        newArray[y].push(4);
      }
    }
  }
  return newArray;
}
