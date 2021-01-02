var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite;
var log1,log2,log3,log1img,log2img,log3img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	log1img = loadImage("download.png")
	log2img = loadImage("download.png")
	log3img = loadImage("download.png")
}




function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	rectMode(CENTER);

	log1 = new Log(455,595,100,0);
	log2 = new Log(275,595,100,0);
	log3 = new Log(365,650,200,90);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(200)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(packageSprite.x);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.display();
  helicopterSprite.display();

  groundSprite.display();
  log1.display();
  log2.display();
  log3.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	
  }
}



