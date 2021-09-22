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
let tpEnter ;
let tpExit;
let length;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  diameter = 20;
  x = width / 2;
  y = height - diameter;
  speedY = 1;
  gravity = 0.2;
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
  };

}

function draw() {
  background(220);
  createTp();
  jumping();
  movement();
  displayCharacter();
  ballHitTp();
  // console.log(isJumping);
}

function ballHitTp() {
  hit = collideRectRect(x, y, diameter, diameter, tpEnter.x, tpEnter.y, tpEnter.tpWidth, tpEnter.tpHeight);
  stroke(hit ? color("blue") : 0);
  console.log(hit);

  if (hit === true) {
    y = tpExit.y - diameter;
    x = tpExit.x + tpExit.tpWidth/2;
  }

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

function createTp() {
  fill(tpEnter.color);
  rect(tpEnter.x, tpEnter.y, tpEnter.tpWidth, tpEnter.tpHeight);

  fill("purple");
  rect(tpExit.x, tpExit.y, tpExit.tpWidth, tpExit.tpHeight);
}

function displayCharacter() {
  
  fill(r, g, b);
  rect(x, y, diameter, diameter);
}

function jumping() {
  if (y === height - diameter) {
    gravity = 0;
    isJumping = false;
    // console.log(isJumping);
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
