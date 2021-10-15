// gridgame 

let cellAmount = 250;
let grid;
let cellSize;
let backgroundMusic;
let musicButton;
let isMusicPlaying = false;

function preload() {
  backgroundMusic = loadSound("assets/Harp.mp3");
}
function setup() {
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
  }
  else{
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }
  grid = createArray(cellAmount);
  cellSize = width/cellAmount;

  musicButton = new Button (0, 0, width / 10, height / 20);
}


function draw() {
  background(220);
  showGrid();
  musicButton.display();
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
    textSize(20);
    fill("white");
    text("Music!", this.x + 2, this.y + 25);
  }

  checkIfInside(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }
}

function mousePressed() {
  if (musicButton.checkIfInside(mouseX, mouseY)) {
    isMusicPlaying =  !isMusicPlaying;
  }
  if (isMusicPlaying === true) {
    backgroundMusic.loop();
  }
  else {
    backgroundMusic.pause();
  }
}

function mouseDragged() {
  if (mouseX <= width && mouseY <= height){
    let cellX = Math.floor(mouseX/cellSize);
    let cellY = Math.floor(mouseY/cellSize);
    
    // changes pixel to the next color in specified area
    for (let y=-3; y<3; y++) {
      for (let x=-15; x<15; x++) {
        clean(cellX+x, cellY+y);
      }
    }
    for (let y=-5; y<5; y++) {
      for(let x=-17; x<17; x++) {
        clean(cellX+x, cellY+y);
      }
    }
    for (let y=-7; y<7; y++) {
      for(let x=-19; x<19; x++) {
        clean(cellX+x, cellY+y);
      }
    }
    for (let y=-9; y<9; y++) {
      for(let x=-21; x<21; x++) {
        clean(cellX+x, cellY+y);
      }
    }
  }
}


function clean(x,y) {
  if (x >= 0 && x < cellAmount && y >= 0 && y < cellAmount) {
    // when clean is ran pixels will change to next color
    if(grid[y][x] === 4){
      grid[y][x] = 0;
    }
    else if(grid[y][x] === 3) {
      grid[y][x] = 4;
    }
    else if(grid[y][x] === 2) {
      grid[y][x] = 3;
    }
    else if(grid[y][x] === 1) {
      grid[y][x] = 2;
    }
  }
}


function showGrid() {
  noStroke();
  for (let y=0; y<cellAmount; y++) {
    for (let x=0; x<cellAmount; x++) {
      // which colors to chnage the grid too
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
  let scalar = 0.03;
  for (let y=0; y<howBig; y++) {
    newArray.push([]);
    for (let x=0; x<howBig; x++) {
      // creating perlin noise 
      let noiseValue = round(noise(x*scalar, y*scalar)*4);
      newArray[y].push(noiseValue);
    }
  }
  return newArray;
}