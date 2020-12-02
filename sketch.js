
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Mango1,Mango2,Mango3,Mango4,Mango5;
var Tree1,Tree1Img,STone;
var ground;
var Boy1,BoyImg;
var SlingShot1;
function preload()
{
	Tree1Img=loadImage("tree.png")
	BoyImg=loadImage("boy.png")	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(500,597,1600,10)
	Mango1 = new Mango(900,200,50,50)
	Mango2 = new Mango(750,190,50,50)
	Mango3 = new Mango(1150,200,50,50)
	Mango4 = new Mango(900,100,50,50)
	Mango5 = new Mango(1030,100,50,50)


	Tree1=createSprite(930, 300, 10,10);
	Tree1.addImage(Tree1Img)
	Tree1.scale=0.45

	Boy1=createSprite(200, 500, 10,10);
	Boy1.addImage(BoyImg)
	Boy1.scale=0.15

	STone = new Stone(120,410)
	SlingShot1 = new lingShot(STone.body,{x:120 , y: 410})
	
}


function draw() {
	
  background("White");
  Engine.update(engine);

  ground.display()
  drawSprites();
  STone.display()
  SlingShot1.display()
  Mango1.display()
  Mango2.display()
  Mango3.display()
  Mango4.display()
  Mango5.display()

}

function mouseDragged() {
    Matter.Body.setPosition(STone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){

   SlingShot1.fly() ;
}

function detectollision(Lstone,Lmango){
mangoBodyPosition = lmango.body.setPosition
stoneBodyPosition = lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   {
     Matter.Body.setStatic(lmango.body,false);
   }
	
}
