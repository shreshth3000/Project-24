
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground, leftWall,rightWall,ceiling;
var hammer;
var rubber;
var stone;
var sand;
var paper;

function setup() {
	createCanvas(500,500);
   engine = Engine.create();
	 world = engine.world;
	 
   ground=new Ground(250,height,500,20);
   leftWall= new Ground(width-500,250,20,500);
   rightWall=new Ground(width,250,20,500);
   ceiling=new Ground(250,height-500,500,20);
	 
   hammer= new Hammer(mouseX,mouseY,70,20);
	 
   rubber=new Rubber(250,250,30);

   paper=new Paper(250,480,20,30);

   stone = new Stone(250,200,40,40);
 
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background("blue");
  hammer.display()
   
  ground.display();   
  leftWall.display();
  rightWall.display();
  ceiling.display();
  
  rubber.display();
  
  stone.display();
  
  paper.display();
 
  drawSprites();
 
}



