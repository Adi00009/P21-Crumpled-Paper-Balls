const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let groundObj;
let leftSided, rightSided;

function preload() {
	
}

function setup() {
	createCanvas(1100, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(50, 50, 50);
	World.add(world, ball);
	
	groundObj = new Ground(width/2, 390, width, 20);
	World.add(world, groundObj);

	leftSided = new Ground(725, 335, 20, 80);
	World.add(world, leftSided);

	rightSided = new Ground(925, 335, 20, 80);
	World.add(world, rightSided);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 50);
  groundObj.display();
  leftSided.display();
  rightSided.display();

  /*stroke("yellow");
  
  line(900, 300, 900, 380);
  line(700, 300, 700, 380);*/

  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball, {x: 0, y: 0}, {x: 0.25, y: -0.25});
	}
}