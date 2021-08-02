var backGroundImage;
var bg1,bg2,bg3;
var superman,superman1,alien,kymera,ghost1,ghost2,ghost3,ghost4,ghost5,ghoul,stormKing,rift1;
var gameState="L1";
var bullet;
var lazar;
var lazerbeam;
var alien1,alien2,alien3,alien4,alien5;




function preload(){
    bg1=loadImage("fnbg1.jpg");
    bg2=loadImage("fnbg2.jpg");
    bg3=loadImage("storm king.jpg");
    superman=loadImage("sup2.png");
    kymera=loadImage("ghoul.jpg");
    ghoul=loadImage("rift.jpg");
    stormKing=loadImage("storm king.jpg");
    rift=loadImage("rift.jpg");
    lazerbeam=loadImage("lazarbeam.png");

}
function setup(){
    createCanvas(1500,700);
    superman1=createSprite(200,200);
    superman1.addImage(superman);
    superman1.scale=0.40
    ghost1=createSprite(700,200);
    ghost2=createSprite(700,400);
    ghost3=createSprite(700,600);
    ghost4=createSprite(1000,300);
    ghost5=createSprite(1000,500);
    alien1=createSprite(700,200);
    alien2=createSprite(700,400);
    alien3=createSprite(700,600);
    alien4=createSprite(1000,300);
    alien5=createSprite(1000,500);
    ghost1.addImage(ghoul);
    ghost2.addImage(ghoul);
    ghost3.addImage(ghoul);
    ghost4.addImage(ghoul);
    ghost5.addImage(ghoul);
    alien1.addImage(kymera);
    alien2.addImage(kymera);
    alien3.addImage(kymera);
    alien4.addImage(kymera);
    alien5.addImage(kymera);
    rift1=createSprite(1300,400);
    rift1.addImage(rift) 
    rift1.scale=0.2;
    lazarGroup=new Group();    
    ghoulGroup=new Group();
    ghoulGroup.add(ghost1);
    ghoulGroup1=new Group();
    ghoulGroup2=new Group();
    ghoulGroup3=new Group();
    ghoulGroup4=new Group();
    ghoulGroup1.add(ghost2);
    ghoulGroup2.add(ghost3);
    ghoulGroup3.add(ghost4);
    ghoulGroup4.add(ghost5);
    alienGroup1=new Group();
    alienGroup1.add(alien1)
    alienGroup2=new Group();
    alienGroup2.add(alien2)
    alienGroup3=new Group();
    alienGroup3.add(alien3)
    alienGroup4=new Group();
    alienGroup4.add(alien4)
    alienGroup5=new Group();
    alienGroup5.add(alien5);
    if(ghoulGroup.isTouching(lazarGroup)){
        ghoulGroup.destroyEach();
        lazarGroup.destroyEach();
    }
    if(ghoulGroup1.isTouching(lazarGroup)){
       ghoulGroup1.destroyEach();
       lazarGroup.destroyEach();
   }
   if(ghoulGroup2.isTouching(lazarGroup)){
       ghoulGroup2.destroyEach();
       lazarGroup.destroyEach();
   }
   if(ghoulGroup3.isTouching(lazarGroup)){
       ghoulGroup3.destroyEach();
       lazarGroup.destroyEach();
   }
   if(ghoulGroup4.isTouching(lazarGroup)){
       ghoulGroup4.destroyEach();
       lazarGroup.destroyEach();
   }
    

    
     
  
}
function draw(){
    background(0);
     if(gameState==="L1"){
        console.log(1);
        alienGroup1.visible=false;
        alienGroup2.visible=false;
        alienGroup3.visible=false;
        alienGroup4.visible=false;
        alienGroup5.visible=false;

        //background(bg1)
        ghosts();
     }
     if(keyDown("space")){
        shoot();
    }
     

    if(alienGroup1.isTouching(lazarGroup)){
        alienGroup1.destroyEach();
        lazarGroup.destroyEach();
    }
    if(alienGroup2.isTouching(lazarGroup)){
       alienGroup2.destroyEach();
       lazarGroup.destroyEach();
   }
   if(alienGroup3.isTouching(lazarGroup)){
       alienGroup3.destroyEach();
       lazarGroup.destroyEach();
   }
   if(alienGroup4.isTouching(lazarGroup)){
       alienGroup4.destroyEach();
       lazarGroup.destroyEach();
   }
   if(alienGroup5.isTouching(lazarGroup)){
       alienGroup5.destroyEach();
       lazarGroup.destroyEach();
   } 
   else if(gameState===2){
           bg1.visible=false
           background(bg2);
           invasion();
       

        
    }
    //else if(gameState==3){
        //background(bg3);
    //}
    background(bg1);
    drawSprites();
}


function ghosts(){
    background(bg1);
     superman1.scale=0.40
    if(keyDown("right")){
        superman1.x=superman1.x+10;
    }
    
    if(keyDown("up")){
        superman1.y=superman1.y-10;
    }
    if(keyDown("down")){
        superman1.y=superman1.y+10;
    }
    if(keyDown("left")){
        superman1.x=superman1.x-10;
    
    }
    if(superman1.isTouching(rift1)){
        gameState=2;
        
    }
}
    function invasion(){
        

        
        superman1.scale=0.40
        if(keyDown("right")){
            superman1.x=superman1.x+10;
        }
        
        if(keyDown("up")){
            superman1.y=superman1.y-10;
        }
        if(keyDown("down")){
            superman1.y=superman1.y+10;
        }
        if(keyDown("left")){
            superman1.x=superman1.x-10;
        
        }
        if(superman1.isTouching(rift1)){
            gameState=2;

    }
 
     
}  



function shoot(){
    lazar=createSprite(450,75,10,10);
    lazar.addImage(lazerbeam);
    lazar.scale=0.2;
    lazar.y=superman1.y-125;
    lazar.x=superman1.x+250;
    lazar.velocityX=10
    lazar.lifetime=70;
    lazarGroup.add(lazar);
    
}
