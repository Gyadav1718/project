var wall,car;
var speed,weight;

function setup() {
  createCanvas(800,400);
 
car = createSprite(50,200,50,50);

wall = createSprite(700,200,60,height/2);
wall.shapeColor= "blue";
speed = random(50,120);
weight = random(400,1500);
car.velocityX= speed;


}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22500;
    }
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
     
  drawSprites();
}