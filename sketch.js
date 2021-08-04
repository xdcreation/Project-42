var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var anim,anim1;

var space, iss_img, iss, spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img;
var hasDocked;
var gameState = "PLAY";

hasDocked = "false"


function preload(){
  spacecraft1_img = loadImage("spacecraft1.png");
  spacecraft2_img = loadImage("spacecraft2.png");
  spacecraft3_img = loadImage("spacecraft3.png");
  spacecraft4_img = loadImage("spacecraft4.png");
  space = loadImage("spacebg.jpg");
  iss_img = loadImage("iss.png"); 
  
  
 }

function setup() {
  createCanvas(1200,800);
  iss = createSprite(width/2, height/2);
  iss.addImage("default", iss_img);
  iss.scale = 1.2;
  
  spacecraft1 = createSprite(random(50,1100),random(500,700));
  spacecraft1.addImage(spacecraft1_img);
  spacecraft1.scale = 0.3;
 
  anim1 = createSprite(600,426,1200,10)
  anim1.visible = true;
  anim = createSprite(width/2,430,100,10)
  anim.visible = true;
  
}

function draw() {
  background(space);  

  if(gameState==="PLAY"){


  if(keyDown(UP_ARROW)){
    spacecraft1.y = spacecraft1.y - 5;
    spacecraft1.addImage(spacecraft2_img);
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft1.x = spacecraft1.x - 5;
    spacecraft1.addImage(spacecraft4_img);
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft1.x = spacecraft1.x + 5;
    spacecraft1.addImage(spacecraft3_img);
  }
  
  if(spacecraft1.x===517&&spacecraft1.y===436){
    gameState="END"
  }
  
  
  }
  spacecraft1.collide(anim1);

  drawSprites();
  if(gameState==="END"){
    fill("white");
    textSize(30);
    text("Docking Successful",550,380)
    if(keyDown(UP_ARROW)){
      spacecraft1.y = spacecraft1.y - 0;
      spacecraft1.addImage(spacecraft2_img);
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft1.x = spacecraft1.x - 0;
      spacecraft1.addImage(spacecraft4_img);
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft1.x = spacecraft1.x + 0;
      spacecraft1.addImage(spacecraft3_img);
    }
  }
  fill("red");
  textSize(10)
text(mouseX+","+mouseY,mouseX,mouseY);  

}
