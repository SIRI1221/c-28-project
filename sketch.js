
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var boy=loadImage();	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1= new mango
mango2= new mango
mango3= new mango
mango4= new mango
mango5= new mango


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);

  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}
function detectcollision(Lstone, Lmango){
mangoBodyPosition=Lmango.body.position
stoneBodyPosition=Lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y )
if(distance,-Lmango.r+Lstone.r)
{
	Matter.Body.setStatic(Lmango.body,false);
}
}

function keyPressed(){
if (keyCode=== 32){
	Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
lanucherObject.attach(stoneObj.body);
}

}


