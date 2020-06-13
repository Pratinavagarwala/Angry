const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2= new Box(240,100,50,90);
    ground = new Ground(200,390,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display();
}