var bullets,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(800,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(30,90);
  weight=random(400,1500);

  bullets =  createSprite(50,200,100,50);
 
 wall = createSprite(700,200,50,250);
 wall.shapeColor = color ("red");
}


function draw() {
  background(80,80,80);  

  bullets.velocityX = speed ; 

  if(wall.x -bullets.x < wall.width/2 + bullets.width/2) {
    bullets.velocityX = 0.5 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        bullets.shapeColor = color(255,0,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        bullets.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        bullets.shapeColor = color(0,255,0);
      }
    } 
  drawSprites();
}