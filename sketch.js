var box1
var box2

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,40,30,1)
  box2 = new Box(200,300,30,40,2)
}

function draw() 
{
  background(220);
box1.show();
box1.move();
box2.show();
box2.move();
}

