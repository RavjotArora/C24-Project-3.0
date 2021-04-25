const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(900,400,100,50);
    hammer = new Hammer(500,300,10,100);
    rubber = new Rubber(800,300,100,100);
    stone = new Stone(600,200,80,100);
    
  
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    iron.display();
    hammer.display();
    stone.display();
    rubber.display();
    
 
}