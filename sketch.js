const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var walkingImage, umbrella, thunder1, thunder2, thunder3, thunder4;
var drops = []

function preload() {
    walkingImage= loadImage('images/Walking\ Frame/walking_1.png');
}

function setup() {
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    for (var i = 0; i < 100; i++) {
        drops.push(new Drop(random(0,400),10,3));
    }
}

function draw() {
    imageMode(CENTER);
    ellipseMode(CENTER);
    background(0);
    walkingImage.resize(400,400);
    image(walkingImage,width/2-30,600);

    for(var i = 0; i < 100; i++) {
        drops[i].display();
    }
}

