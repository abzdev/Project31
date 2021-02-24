const World = Matter.World;
const Engine = Matter.engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var manAnimation, umbrella, thunder1, thunder2, thunder3, thunder4;

function preload(){
    manAnimation = loadAnimation('walking_1.png','walking_2.png','walking_3.png','walking_4.png','walking_5.png','walking_6.png','walking_7.png','walking_8.png');
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(manAnimation,width/2,700);
}

