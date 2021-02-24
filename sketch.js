const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var walkingImage, umbrella, umbrellaRadius, thunder1, thunder2, thunder3, thunder4;
var drops = []

function preload() {
    walkingImage= loadImage('images/Walking\ Frame/walking_1.png');
    thunder1 = loadImage('images/thunderbolt/1.png');
    thunder2 = loadImage('images/thunderbolt/2.png');
    thunder3 = loadImage('images/thunderbolt/3.png');
    thunder4 = loadImage('images/thunderbolt/4.png');
}

function setup() {
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    for (var i = 0; i < 100; i++) {
        drops.push(new Drop(random(0,400),0,3));
    }

    umbrellaRadius = 90;
    umbrella = Bodies.circle(width/2-20,530,umbrellaRadius, {isStatic: true});
    World.add(world,umbrella);
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

    if(frameCount%60 === 0) {
        drawThunder();
    }
    //circle(umbrella.position.x,umbrella.position.y,umbrellaRadius*2);
}

function drawThunder() {
    var rand = Math.round(random(1,4));
    push();
    imageMode(CORNER);
    switch(rand) {
        case 1:
            thunder1.resize(400,400);
            image(thunder1,0,-20);
            break;
        case 2:
            thunder2.resize(400,400);
            image(thunder2,0,-20);
            break;
        case 3:
            thunder3.resize(400,400);
            image(thunder3,0,-40);
            break;
        case 4:
            thunder4.resize(400,400);
            image(thunder4,0,-40);
            break;
        default:
            break;
    }
}