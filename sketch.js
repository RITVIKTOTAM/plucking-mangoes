

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var boy1,ground1,tree1,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,stone1,chain1;



function setup() {
	var canvas = createCanvas(800,400);


  engine = Engine.create();
  world = engine.world;
  

  boy1 = new Boy(200,335,200,200);
  tree1 = new Tree(600,240,300,300);
  mango1 = new Mango(550,200,30,30);
  mango2 = new Mango(590,160,30,30);
  mango3 = new Mango(630,200,30,30);
  mango4 = new Mango(670,160,30,30);
  mango5 = new Mango(710,200,30,30);
  mango6 = new Mango(500,200,30,30);
  mango7 = new Mango(550,120,30,30);
  mango8 = new Mango(630,120,30,30);
  stone1 = new Stone(50,200,40,40);
  ground1 = new Ground(400,390,800,10);
  chain1 = new Chain(stone1.body,{x:140,y:290});
   
    
   
    
	
  
  
   
    
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
 
  
 

 ground1.display();
 boy1.display();
 tree1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango4.display();
 stone1.display();
 chain1.display();
 
}


function mouseDragged(){

  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

  chain1.link.bodyA = null;

}