var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImage,cloudGroup;
var obstacle1,obstacle2, obstacle3, obstacle4, obstacle5, obstacle6,obstaclegroup;
var score=0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImage=loadImage("cloud.png");
  groundImage = loadImage("ground2.png")
  obstacle2=loadImage("obstacle2.png");
   obstacle1=loadImage("obstacle1.png");
   obstacle3=loadImage("obstacle3.png");
   obstacle4=loadImage("obstacle4.png");
   obstacle5=loadImage("obstacle5.png");
   obstacle6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  cloudGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("white");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  clouds();
  obstacles();
  
  score=Math.round(score+0.5);
  text("score"+score,500,50);
  
  trex.collide(invisibleGround);
  drawSprites();
  
  
}
function clouds(){
if(frameCount%60===0){
 cloud=createSprite(600,100,40,10);
 cloud.y=random(50,100);
  cloud.addImage(cloudImage)
  cloud.scale=0.5;
  cloud.velocityX=-3;
  cloud.lifetime=200;
  cloud.depth=trex.depth;
  trex.depth=trex.depth+1;
  cloudGroup.add(cloud);
}
}
  function obstacles(){
    if(frameCount%80===0){
    var cactus=createSprite(600,170,40,10);
      cactus.velocityX=-4;
      var r=Math.round(random(1,6));
      switch(r){
        case 1:cactus.addImage(obstacle1)
        break ;
        case 2:cactus.addImage(obstacle2);
        break;
        case 3:cactus.addImage(obstacle3);
          break;
          case 4:cactus.addImage(obstacle4);
          break;
          case 5:cactus.addImage(obstacle5);
          break;
          case 6:cactus.addImage(obstacle6);
          break;
          default:break;
    } 
      cactus.scale=0.5;
      cactus.lifetime=300;
      obstacleGroup.add(cactus);
    }
  }