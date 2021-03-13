var Fr,Mr,bounce
var object1,object2,object3,object4;

function setup() {
  createCanvas(800,400);
  Fr = createSprite(400, 200, 50, 50);
  Fr.shapeColor = "yellow"
  Fr.debug = true
  Mr = createSprite(300, 100, 50, 50);
  Mr.shapeColor = "pink"
  Mr.debug = true
  bounce = createSprite(200, 10, 50, 50);
  bounce.velocityY = 1
  bounce.shapeColor = "pink"
  bounce.debug = true

  object1 = createSprite(100,100,50,50)
  object1.shapeColor = "purple"
  object1.velocityX = 1
  object2 = createSprite(100,200,50,50)
  object2.shapeColor = "blue"
  object2.velocityX = 1
  object3 = createSprite(100,300,50,50)
  object3.shapeColor = "yellow"
  object4 = createSprite(100,400,50,50)
  object4.shapeColor = "pink"

}

function draw() {
  background("black");  
  
  Mr.x = mouseX
  Mr.y = mouseY
  
   if (isTouching(Mr,object1)){

    object1.shapeColor = "red"
    Mr.shapeColor = "red"
   }
   else {
    object1.shapeColor = "green"
    Mr.shapeColor = "green"
   }
  
bounceOff(Mr,object2)
  




  drawSprites();


}

