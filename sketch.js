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

if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y+10;
}