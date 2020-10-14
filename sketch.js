//to give variable to objects
  var bullet, wall;

//to give variables to physics variables 
  var speed, weight,thickness;


function setup() {

 //to create canvas  
  createCanvas(1600,400);

 //to give random values to variables
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

 //to create sprites of the variables
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, 200);

 //to give colours to variables
  wall.shapeColor = (80,80,80); 
  bullet.shapeColor = ("white"); 

 //to give velocity to variables
  bullet.velocityX = speed; 

}


function draw() {
 //to create a canvas
  background ("black"); 

 //when bullet is touching the wall
 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   //the formula of damage
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   //when damage is greater than 10 change color to red
   if(damage>10){
     wall.shapeColor = color(255,0,0);
   } 
   //when damage is less than 10 change color to green
   if(damage<10){
     wall.shapeColor = color(0,255,0);
   }
 } 

 //to draw sprites
  drawSprites();
}


//a seperate function for to check weather the wall and bullet have collided or not
function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  //if collided then change color
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  //if not collided then dont change the color
  else{
    return false;
  }
}