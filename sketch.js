var astronaut;
var asteroids;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){

}

function draw() {
  background(255,255,255);  
  drawSprites();
  asteroids();
}

function asteroids(){
  asteroids = createSprite(random(20,780),420,40,40);
  asteroids.addImage();
  asteroids.scale = 0.1;
  asteroids.velocityX = -8;
  asteroids.lifetime = 400;
  asteroidsGroup.add(); 
}

