let x = 100;
let y = 300;
let speed = 3;

let jumping = false;
let jumpFrame = 0;

let clouds = [[50, 50], [300, 80], [500, 40]];

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(135, 206, 235); 

  drawScenery();
  updateMovement();
  updateJump();
  drawPlayer();
}


function updateMovement() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x += speed;
  }
  
  // Keep player on screen
  x = constrain(x, 0, width - 40);
}

function keyPressed() {
  if (key === " " || key === "ArrowUp" || key === "w") {
    if (!jumping) {
      jumping = true;
      jumpFrame = 0;
    }
  }
}

// ==================================================
// 🧠 JUMP LOGIC 
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 25; 
  let jumpHeight = sin(t * PI) * 130;
  y = 300 - jumpHeight;

  if (jumpFrame >= 25) {
    jumping = false;
    y = 300;
  }
}

function drawScenery() {
  // Ground
  fill(155, 118, 83); // dirt
  rect(0, 340, width, 60);
  fill(34, 139, 34); // grass
  rect(0, 340, width, 15);

  // Clouds
  fill(255);
  for (let c of clouds) {
    ellipse(c[0], c[1], 60, 40);
    ellipse(c[0] + 20, c[1] + 10, 50, 30);
  }

  // pipe
  fill(0, 150, 0);
  rect(450, 280, 60, 60); //  body
  fill(0, 180, 0);
  rect(440, 260, 80, 20); //  rim
}

function drawPlayer() {
  fill(255, 60, 60);
  rect(x, y, 40, 40);
}
