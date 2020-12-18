var ball;
var box1,box2,box3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(10,10)
	box1 = new Box(600,650,200,20);
	box2 = new Box(550,550,20,100);
	box3 = new Box(650,550,20,100);
	ground = new Ground(400,700,800,20);

	

	Engine.run(engine);

}

	
	  



function draw() {
  background(0);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
	}
  }
