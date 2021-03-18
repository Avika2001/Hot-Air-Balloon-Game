var balloon;
var database;

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  balloon = createSprite(400, 200, 50, 50);
}

function draw() {
  background(67,84,90); 
  drawSprites();
}

if(keyIsDown(LEFT_ARROW)){
  balloon.x = balloon.x-10;
}
else if(keyIsDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10;
}
else if(keyIsDown(UP_ARROW)){
  balloon.y = balloon.y-10;
}
else if(keyIsDown(DOWN_ARROW)){
  balloon.y = balloon.y+10;
}
