const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var block, blockImg;

function preload(){
    blockImg = loadImage('polygon.png');
}

function setup(){
    createCanvas(1000, 800);

    engine = Engine.create();
    world = engine.world;
    stand = new Ground(500,780, 1000, 50);

    stand1 = new Ground(250, 500, 400, 20);
    stand2 = new Ground(700, 400, 300, 20);


    //1st stand 
    //1st level
    box1 = new Box(100, 465, 50, 50);
    box2 = new Box(150, 465, 50, 50);
    box3 = new Box(200, 465, 50, 50);
    box4 = new Box(250, 465, 50, 50);
    box5 = new Box(300, 465, 50, 50);
    box6 = new Box(350, 465, 50, 50);
    box7 = new Box(400, 465, 50, 50);

    //2nd level
    box8 = new Box(120, 415, 50, 50);
    box9 = new Box(170, 415, 50, 50);
    box10 = new Box(220, 415, 50, 50);
    box11 = new Box(270, 415, 50, 50);
    box12 = new Box(320, 415, 50, 50);
    box13 = new Box(370, 415, 50, 50);

    //3rd level
    //box14 = new Box(140, 365, 50, 50);
    box14 = new Box(190, 365, 50, 50);
    box15 = new Box(240, 365, 50, 50);
    box16 = new Box(290, 365, 50, 50);
    //box18 = new Box(340, 365, 50, 50);

    //2nd stand
    //1st level
    box17 = new Box(600, 365, 50, 50);
    box18 = new Box(650, 365, 50, 50);
    box19 = new Box(700, 365, 50, 50);
    box20 = new Box(750, 365, 50, 50);
    box21 = new Box(800, 365, 50, 50);

    //2nd level
    box22 = new Box(620, 315, 50, 50);
    box23 = new Box(670, 315, 50, 50);
    box24 = new Box(720, 315, 50, 50);
    box25 = new Box(770, 315, 50, 50);

    //3rd level
    box26 = new Box(670, 265, 50, 50);
    box27 = new Box(720, 265, 50, 50);

    //block
    block = Bodies.circle(50, 200, 20);
    World.add(world, block);

    //block = new Box(50, 300, 60, 60);

    //sling
    rope = new SlingShot(this.block, {x: 50, y: 300});

    var render = Render.create({
        element: document.body, 
        engine: engine, 
        options: { width: 1000, height: 800, showAngleIndicator: true }
        }); 
        Render.run(render);

}

function draw(){
    background('blue');
    stand.display();
    stand1.display();
    stand2.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    
    rope.display();
    imageMode(RADIUS);
    image(blockImg, this.block.position.x, this.block.position.y, 20, 20);

}

function mouseDragged(){
    Matter.Body.setPosition(this.block, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
    rope.fly();
}
