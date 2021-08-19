var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
 
  tower = createSprite(300,300,600,600);
  tower.addImage(towerImg);
  // creating the ghost
  ghost = createSprite(300,300,20,20);
  ghost.addImage(ghostImg);
  ghost.scale = 0.4
  // creating the groups
  doorsGroup = new Group();
  climbersGroup = new Group(); 

  
  
}

function draw() {
  background(200);

  // moving the background
  tower.velocityY = 3;
  if(tower.y > 400){
    tower.y = 300;
  }
 // moving the ghost with arrow keys
 if(keyDown("right")){
   ghost.x = ghost.x+2;
 }
 if(keyDown("left")){
   ghost.x = ghost.x-2;
 }
 if(keyDown("space")){
   ghost.velocityY = -1;
 }
 ghost.velocityY = ghost.velocityY+0.5;

 // mentioning the functions
 doors();

 drawSprites();

 // writting the istouching condition
 if (climbersGroup.isTouching(ghost)||(ghost.y>600)){
   text("GAME OVER", 300,300);
   climbersGroup.destroyEach();
   doorsGroup.destroyEach();
   ghost.destroy();
   climbersGroup.setVelocityYEach(0);
   doorsGroup.setVelocityYEach(0);
   tower.velocityY = 0;
   
 }

}

function doors(){
if(frameCount%100 === 0){
  door = createSprite(Math.round(random(100,400)),50)
  door.addImage(doorImg);
  door.velocityY = 3;
  climber = createSprite(door.x,120)
  climber.addImage(climberImg);
  climber.velocityY = 3;
  climber.lifetime = 140;
  door.lifetime = 140;
  doorsGroup.add(door);
  climbersGroup.add(climber);

}
}

