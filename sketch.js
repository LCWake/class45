var player, playerImg;
var chicken, chickenImg;
var cow, cowImg;
var rabbit, rabbitImg;
var duck, duckImg;
var owl, owlImg;
var background, backgroundImg

function preload(){
  playerImg = loadImage("./assets/player.jpg")
  backgroundImg = loadImage("./assets/background.jpeg")
}

function setup() {
  createCanvas(800,304);
  
  background = createSprite(400, 152, 50, 50);
  background.addImage("background", backgroundImg)
  background.scale = 0.26
  player = createSprite(600, 166)
  player.addImage("player", playerImg)
  player.scale = 0.2

}

function draw() {
  
  if(keyIsDown(UP_ARROW)){
    player.y = player.y - 2
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y = player.y + 2
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 2
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 2
  }

  drawSprites();
}