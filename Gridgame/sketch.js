// gridgame

let cellAmount = 250;
let grid = createArray(cellAmount);
let cellSize;

function setup() {
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
  }
  else{
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }

  cellSize = width/cellAmount;
  grid = showGrid(grid);
}

function draw() {
  background(220);
  showGrid();
  clean();
}

function mousePressed() {

  if (mouseX <= width && mouseY <= height){
    let cellX = Math.floor(mouseX/cellSize);
    let cellY = Math.floor(mouseY/cellSize);
    
    
    for (let y=-5; y<5; y++) {
      for (let x=-30; x<30; x++) {
        clean(cellX+x, cellY+y);
      }
    }
    for (let y=-7; y<7; y++) {
      for(let x=-32; x<32; x++) {
        clean(cellX+x, cellY+y);
      }
    }
    for (let y=-9; y<9; y++) {
      for(let x=-34; x<34; x++) {
        clean(cellX+x, cellY+y);
      }
    }
    for (let y=-11; y<11; y++) {
      for(let x=-36; x<36; x++) {
        clean(cellX+x, cellY+y);
      }
    }
  }
  
}

function clean(x,y) {
  if (x >= 0 && x < cellAmount && y >= 0 && y < cellAmount) {
    if(grid[y][x] === 4){
      grid[y][x] = 3;
    }
    else if(grid[y][x] === 3) {
      grid[y][x] = 2;
    }
    else if(grid[y][x] === 2) {
      grid[y][x] = 1;
    }
    else if(grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

function showGrid() {
  noStroke();
  let scalar = 0.05;
  for (let y=0; y<cellAmount; y++) {
    for (let x=0; x<cellAmount; x++) {
      let noiseValue = round(noise(x*scalar, y*scalar)*4);
      grid[y][x] = noiseValue;
      if (noiseValue === 0) {
        grid[y][x] = 1;
      }
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
  return grid;
}

function createArray(howBig) {
  let newArray = [];
  for (let y=0; y<howBig; y++) {
    newArray.push([]);
    for (let x=0; x<howBig; x++) {
      newArray[y].push(1);
    }
  }
  return newArray;
}

