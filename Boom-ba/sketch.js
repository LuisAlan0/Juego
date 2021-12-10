

var Kid;
var pared1, pared2, pared3, pared4;
var edges;
var mon1, mon2;
var Bomb;
var Box1;
function preload(){

}

function setup(){
createCanvas(800,800);
kid = createSprite(70,50,20,20);
kid.shapeColor = "red"

pared1 = new Pared(60,80,120,10);
pared2 = new Pared(180,50,10,160);
pared3 = new Pared(116,133,140,10);
pared4 = new Pared(40,199,10,140);

mon1 = new Monstruo(300,50,20,20);
mon2 = new Monstruo(60,300,20,20);


Box1 = new BoxM(160, 80, 30,30)

}


function draw(){
background(0)
edges = createEdgeSprites();
kid.bounceOff(edges);

pared1.display();
pared2.display();
pared3.display();
pared4.display();

mon1.display();
mon2.display();

Box1.display();

if (keyDown(LEFT_ARROW)){
  kid.x = kid.x-5;
}

if (keyDown(RIGHT_ARROW)){
  kid.x = kid.x+5;
}

if (keyDown(UP_ARROW)){
  kid.y = kid.y-5;
}

if (keyDown(DOWN_ARROW)){
  kid.y = kid.y+5;
}

if (keyDown("z")){
  Bomb = createSprite(kid.x+10, kid.y, 10,10)
  Bomb.shapeColor = "gray"
  Bomb.lifetime = 50
 if (Bomb.isTouching(Box1)){
   Box1.lifetime = 50
 }
}



drawSprites();
}
