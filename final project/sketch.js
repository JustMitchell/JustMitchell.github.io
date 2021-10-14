// Final Project

let player;
let holdingTpExit = false;
let holdingTpEnter = false;
let x;
let y;
let diameter;
let speedY;
let speedX = 2;
let gravity;
let isJumping = false;
let increaseSpeedX;
let tpEnter;
let tpExit;
let length;
let hit = false;
let acceleration = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(width / 2, height - 20, 20);


  speedY = 1;
  // gravity = 0.2;

  tpEnter = {
    tpWidth: width/10,
    tpHeight: 30,
    x: random(width, width/100),
    y: height - 100,
    color: "red",
  };

  tpExit = {
    tpWidth: width/10,
    tpHeight:  10,
    x: random(width, width/100),
    y: random(height, height/100),
    color: "purple",
  };
}

function draw() {
  background(220);
  createTp();
  jumping();
  player.movement();
  player.display();
  ballHitTp();
  dragRects();
}

class Player {
  constructor (x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.speedY = 1;
    this.speedX = speedX;
    this.color = "red";
    this.gravity = 0.2;
  }
  display() {
    fill("red");
    rect(this.x, this.y, this.diameter, this.diameter);
  }
  movement() {
    if (keyIsDown(68)) { //d
      this.x += this.speedX;
    }
    if (keyIsDown(65)) { // a
      this.x -= this.speedX;
    }
    // tp player to other size when they go off screen
    if (x > windowWidth) {
      this.x = 0;
    }
    if (x < 0) {
      this.x = windowWidth;
    }
    // jumping
    if (y === height - diameter) {
      gravity = 0;
      isJumping = false;
    } 
    else {
      gravity = 0.2;
    }
  
    if (y > height - diameter) {
      y = height - diameter;
      speedY = 0;
    } 
    else {
      y += speedY;
      speedY += gravity;
    }
  }
}
// detects when player hits enter tp and moves it to exit tp
function ballHitTp() {
  hit = collideRectRect(x, y, diameter, diameter, tpEnter.x, tpEnter.y, tpEnter.tpWidth, tpEnter.tpHeight);
  stroke(hit ? color("blue") : 0);
  // console.log(hit);

  if (hit === true) {
    y = tpExit.y - diameter;
    x = tpExit.x + tpExit.tpWidth/2;
  }
}

// function movement() {
//   if (keyIsDown(68)) { //d
//     x += speedX;
//   }
//   if (keyIsDown(65)) { // a
//     x -= speedX;
//   }
//   // tp player to other size when they go off screen
//   if (x > windowWidth) {
//     x = 0;
//   }
//   if (x < 0) {
//     x = windowWidth;
//   }
// }

// lets me drag exit tp and enter tp aound the screen
function dragRects() {
  // Enter tp rect
  if (mouseX > tpEnter.x + 10 && mouseX < tpEnter.x + tpEnter.tpWidth + 10 && mouseY > tpEnter.y + 10 && mouseY < tpEnter.y + tpEnter.tpHeight + 10 && mouseIsPressed) {
    holdingTpEnter = true;
  } 
  else {
    holdingTpEnter = false;
  }
  if (holdingTpEnter) {
    tpEnter.x = mouseX - tpEnter.tpWidth/2;
    tpEnter.y = mouseY - tpEnter.tpHeight/2;
  }
  
  // Exit tp rect
  if (mouseX > tpExit.x + 10 && mouseX < tpExit.x + tpExit.tpWidth + 10 && mouseY > tpExit.y + 10 && mouseY < tpExit.y + tpExit.tpHeight + 10 && mouseIsPressed) {
    holdingTpExit = true;
  } 
  else {
    holdingTpExit = false;
  }
  if (holdingTpExit) {
    tpExit.x = mouseX - tpExit.tpWidth/2;
    tpExit.y = mouseY - tpExit.tpHeight/2;
  }
}

// creates tp rectangles
function createTp() {
  fill(tpEnter.color);
  rect(tpEnter.x, tpEnter.y, tpEnter.tpWidth, tpEnter.tpHeight);

  fill(tpExit.color);
  rect(tpExit.x, tpExit.y, tpExit.tpWidth, tpExit.tpHeight);
  // tp rects move when r is down
  if (keyIsDown(82)) {
    tpEnter.x = random(width, width/100);
    tpExit.x = random(width, width/100);
    tpExit.y= random(height, height/100);
  }
}
// function displayCharacter() {
//   fill("red");
//   rect(x, y, diameter, diameter);
// }
// turn off gravity when not in the air
function jumping() {
  if (y === height - diameter) {
    gravity = 0;
    isJumping = false;
  } 
  else {
    gravity = 0.2;
  }

  if (y > height - diameter) {
    y = height - diameter;
    speedY = 0;
  } 
  else {
    y += speedY;
    speedY += gravity;
  }
}
// jump when space is pressed
function keyPressed() {
  if (isJumping === false) {
    if (keyCode === 32) {
      isJumping = true;
      speedY = -5;
    }
  }
}
