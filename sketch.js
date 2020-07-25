const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var bob1,bob2,bob3,sling;

function setup(){
	
    var canvas = createCanvas(900,700);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   

    ground = Bodies.rectangle(500,100,300,20,ground_options);
    World.add(world,ground);

  
    
    

    bob1= new Bob(400,400,50)
  bob2= new Bob(450,400,50);
    bob3= new Bob(500,400,50);
    bob4= new Bob(550,400,50);
    bob5= new Bob(600,400,50);

    sling=new SlingShot(box1.body,ground.body)
    
   

}

function draw(){
    background(225);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,300,20);
 
	

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
}








