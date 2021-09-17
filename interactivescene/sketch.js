// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let diameter;
let speedY;
let speedX = 5;
let gravity;
let r = 100;
let g = 220;
let b = 50;
let isJumping = false;
let increaseSpeedX;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } 
  else {
    createCanvas(windowWidth, windowWidth);
  }
  diameter = 20;
  x = width / 2;
  y = height - size;
  speedY = 1;
  gravity = 0.2;
}

function draw() {
  background(220);

  jumping();
  movement();
  displayBall();
  // console.log(isJumping);
}
function movement() {
  if (keyIsDown(68)) {
    //d
    x += speedX;
  }
  if (keyIsDown(65)) {
    //a
    x -= speedX;
  }
}

function displayBall() {
  fill(r, g, b);
  circle(x, y, size);
}

function jumping() {
  if (y === height - size) {
    gravity = 0;
    isJumping = false;
    // console.log(isJumping);
  } 
  else {
    gravity = 0.2;
  }

  if (y > height - size) {
    y = height - size;
    speedY = 0;
  } 
  else {
    y += speedY;
    speedY += gravity;
  }
}

function keyPressed() {
  if (isJumping === false) {
    if (keyCode === 32) {
      isJumping = true;
      // console.log(isJumping);
      speedY = -5;
    }
  }
}

function mouseWheel() {
  increaseSpeedX = event.delta / 95;
  if (event.delta) {
    if (speedX > 1) {
      speedX += increaseSpeedX;
      r = random(0, 225);
      g = random(0, 225);
      b = random(0, 225);
    } 
    else {
      speedX = 2;
    }
  }
}
