var mole, moleCollide, Enemy, score;
var backGround, backGround2,invGround;
var dirtPath;
PLAY = 1;
END = 0;
var gameState = PLAY;
function preload(){
moles = loadAnimation("Mole1.png","Mole2.png");
Back = loadAnimation("Background.jpg");
EnemySkin = loadImage("Enemy.jpg");
dirt = loadImage("DirtPath.png")
}
function setup() {
 createCanvas(windowWidth, windowHeight);
//creates the mole sprite
 mole = createSprite(240,800,10,10);
mole.addAnimation("Mole",moles);
mole.scale = 0.2;

invGround = createSprite(windowWidth/2,975,windowWidth,10)
invGround.visibility = false;
backGround = createSprite(960,500,windowWidth*6,windowHeight-150);
backGround2 = createSprite(2850,500,windowWidth*6,windowHeight-150);
backGround.addAnimation("Background",Back);
backGround2.addAnimation("Background",Back);
backGround.depth = mole.depth;
backGround.depth = backGround2.depth;

}


function draw() {
if (gameState = PLAY){
backGround.velocityX =-3;
backGround2.velocityX =-3;
fill(255);
score = text("Score = " + frameCount/30,20,20);
score.depth = backGround.depth;
score.depth = backGround2.depth;
score.depth = score.depth + 1;
mole.collide(invGround);
dirtPath = createSprite(mole.x-10, mole.y,20,20);
dirtPath.addImage(dirt);
dirtPath.scale = 0.25;
dirtPath.depth = mole.depth;
dirtPath.velocityX = -3;
dirtPath.lifetime = 60;
if (backGround2.x < 960){
 backGround.x = 960;
 backGround2.x = 2850;
 
}
if (keyDown("space")&& mole.y >= 250){
  mole.velocityY = -12;
}
if (frameCount%200 === 0){
 Enemy = createSprite(1900,Math.round(random(300,1500)),50,50);
 Enemy.addAnimation("Enemy",EnemySkin)
 Enemy.scale = 0.15;
 Enemy.velocityX =-3;
 Enemy.lifetime = 750;
 Enemy.depth = backGround.depth;
 Enemy.depth = backGround2.depth;
 Enemy.depth = Enemy.depth + 1;
}
 if (mole.isTouching(Enemy)){
gameState = END;
}

}


mole.velocityY = mole.velocityY + 4;
    mole.depth = mole.depth + 1;
    
if (gameState = END){
    Enemies.velocityX = 0;
    dirtPath.velocityX = 0;
    backGround.velocityX = 0;
    backGround2.velocityX = 0;
}

    drawSprites();
}