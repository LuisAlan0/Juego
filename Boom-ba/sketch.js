

var kid, kidL, kidR, KidRl, KidRr;
var pared1, pared2, pared3, pared4;
var edges;
var mon1, mon2;
var monAni;
var Bomb, BombE;
var Box1, boxImg;
function preload(){
  KidRl = loadAnimation("ani/kidR6.png","ani/kidR5.png","ani/kidR6.png","ani/kidR7.png")
  kidL = loadAnimation("ani/kidR8.png")
  KidRr = loadAnimation("ani/kidR2.png","ani/kidR1.png","ani/kidR2.png","ani/kidR3.png")
  kidR = loadAnimation("ani/kidR4.png")

  BombE = loadAnimation("ani/bomb1.png", "ani/bomb2.png", "ani/bomb3.png", "ani/bomb2.png", "ani/bomb1.png","ani/bomb2.png","ani/bomb3.png","ani/bomb2.png","ani/bomb1.png","ani/bomb2.png","ani/bomb3.png","ani/bomb3.png","ani/bomb4.png")

  boxImg = loadImage("ani/box1.png")

  monAni = loadAnimation("mon/Mons1.png","mon/Mons2.png","mon/Mons3.png","mon/Mons4.png","mon/Mons5.png","mon/Mons6.png","mon/Mons7.png","mon/Mons8.png","mon/Mons9.png","mon/Mons10.png")
}

function setup(){
createCanvas(800,800);
kid = createSprite(70,50,20,20);
kid.shapeColor = "red"
kid.scale = 0.2
kid.addAnimation("KLR", kidR)
kid.addAnimation("KLL",kidL) 
kid.addAnimation("KRL",KidRl)
kid.addAnimation("KRR",KidRr)

pared1 = new Pared(60,80,120,10);
pared2 = new Pared(180,50,10,160);
pared3 = new Pared(116,133,140,10);
pared4 = new Pared(40,199,10,140);

mon1 = createSprite(690,70,20,20);
mon1.addAnimation("nope",monAni)
mon1.scale = 0.7

mon2 = new Monstruo(60,300,20,20);


Box1 = createSprite(600, 80, 30,30)
Box1.addImage(boxImg)
Box1.scale = 0.5
Box1.shapeColor = "brown"
}


function draw(){
background(100)
edges = createEdgeSprites();
kid.bounceOff(edges);

pared1.display();
pared2.display();
pared3.display();
pared4.display();

mon1.display();
mon2.display();

if (keyDown(LEFT_ARROW)){
  kid.x = kid.x-5;
  kid.changeAnimation("KRL",KidRl)
  kid.play()
} else{
    if (keyWentUp("left")){
      kid.changeAnimation("KLL",kidL)
    }
}

if (keyDown(RIGHT_ARROW)){
  kid.x = kid.x+5;
  kid.changeAnimation("KRR",KidRr)
  kid.play()

} else{
    if (keyWentUp("right")){
      kid.changeAnimation("KLR",kidR)
    }
}

if (keyDown(UP_ARROW)){
  kid.y = kid.y-5;

}
if (keyDown(DOWN_ARROW)){
  kid.y = kid.y+5;
}







if (keyDown("z")){
  Bomb = createSprite(kid.x+29, kid.y+15, 10,10)
  Bomb.shapeColor = "gray"
  Bomb.addAnimation("Bom",BombE)
  Bomb.scale = 0.6
  Bomb.lifetime = 50
 if (Bomb.isTouching(Box1)){
   Box1.lifetime = 50
 }
}

if (keyDown("c")){
  fill("red")
  textSize(18)
  stroke(10)
  text("HOLA",kid.x+26, kid.y)
}



drawSprites();
}



