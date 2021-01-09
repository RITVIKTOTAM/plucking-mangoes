

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var boy1,ground1,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,stone1,chain1,treeImage;

function preload(){

   treeImage = loadImage("tree.png")

}

function setup() {
	var canvas = createCanvas(800,400);


  engine = Engine.create();
  world = engine.world;
  

  boy1 = new Boy(200,335,200,200);
  
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
 
  imageMode(CENTER);
  image(treeImage,600, 250, 300,300);
 
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  


 ground1.display();
 boy1.display();
 
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

function keyPressed(){

if(keyCode == 32){

  Matter.Body.setPosition(stone1.body,{x:130,y:285})

}

}

function detectollision(stone1,mango6){

  var distance = dist(stone1.body.position.x,stone1.body.position.y,mango6.body.position.x,mango6.body.position.y)
     if(distance <= mango6.r+stone1.r){

       Matter.Body.setStatic(mango6.body,false);

     }   

}