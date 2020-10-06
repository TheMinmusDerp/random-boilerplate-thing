var rectangle, moving_rectangle;

function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  rectangle = createSprite(400,100,50,80);
  rectangle.shapeColor = "green";
  moving_rectangle = createSprite(400,800,80,30);
  moving_rectangle.shapeColor = "green";
  rectangle.debug = true;
  moving_rectangle.debug=true;
  moving_rectangle.velocityY = -5;
  rectangle.velocityY = 5;
}

function draw() {
  background(0);
  //moving_rectangle.x = World.mouseX;
  //moving_rectangle.y = World.mouseY;
  //console.log(moving_rectangle.x-rectangle.x);
  /* if(moving_rectangle.x-rectangle.x <= moving_rectangle.width/2 + rectangle.width/2 && 
    rectangle.x - moving_rectangle.x <= moving_rectangle.width/2 + rectangle.width/2 &&
    rectangle.y-moving_rectangle.y <= moving_rectangle.height/2 + rectangle.height/2 &&
    moving_rectangle.y-rectangle.y <= moving_rectangle.height/2 + rectangle.height/2) {
    rectangle.shapeColor = "red";
    moving_rectangle.shapeColor = "red";
  }
  else {
    rectangle.shapeColor = "green";
    moving_rectangle.shapeColor = "green";
  } */
  if(moving_rectangle.x-rectangle.x <= moving_rectangle.width/2 + rectangle.width/2 && 
    rectangle.x - moving_rectangle.x <= moving_rectangle.width/2 + rectangle.width/2 &&
    rectangle.y-moving_rectangle.y <= moving_rectangle.height/2 + rectangle.height/2 &&
    moving_rectangle.y-rectangle.y <= moving_rectangle.height/2 + rectangle.height/2) {
    rectangle.velocityY = 0-rectangle.velocityY;
    moving_rectangle.velocityY = 0 - rectangle.velocityY;
  }

  drawSprites();
}