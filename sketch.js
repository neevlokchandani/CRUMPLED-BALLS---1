
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side0,side1,side2;

function preload(){
	
}

function setup() {
	 createCanvas(800, 500);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 300, 10);

     ground = new Ground(400, 480, 8000, 20);
  
	 side0 = new Dustbin(550, 420, 20, 100);
     side1 = new Dustbin(635, 460, 150, 20);
     side2 = new Dustbin(720, 420, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  side0.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}

  if(keyCode === DOWN_ARROW)  {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:-15, y: -15})
  }
  }


