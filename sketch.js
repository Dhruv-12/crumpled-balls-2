
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var dustbinIMG
function preload()
{
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
paper = new Paper(50,650,25);	

box=new StaticBodies(625,630,20,100 );
	box1=new StaticBodies(720,670,200,20);
	box2=new StaticBodies(815,630,20,100);

  
	ground = new Ground(600,690,1200,20);
	var render = Render.create
	({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
   Engine.run(engine);
   Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  paper.display();

  box1.display();
box.display();
box2.display();

ground.display();
image(dustbinIMG,610,560,220,120);

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25})
   
	 }
   }
   


