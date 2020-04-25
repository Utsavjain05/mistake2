const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var shot;
var ball1;
var enemy1;
function setup(){
var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball1= new ball(100,100);
shot=new shot(ball1.body,{x:100,y:70});
enemy1=new enemy (150,100);
}






function draw(){
Engine.update(engine);
ball1.display();
shot.display();
enemy1.display();
}


function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  shot.fly();
}

/*var fixedrect,movingrect;
var gameObject1,gameObject2,gameObject3,gameObjeect4;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 100, 50);
movingrect=createSprite(400,200,50,100);
fixedrect.shapeColor="green";
fixedrect.debug=true;
movingrect.shapeColor="green";
movingrect.debug=true;

gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";
gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";
gameObject3=createSprite(300,100,50,50);
gameObject3=shapeColor="green";
gameObject4=createSprite(400,100,50,50);
gameObject4=shapeColor="green";
}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

 if (isTouching(movingrect,gameObject1)){
  movingrect.shapeColor="red";
  gameObject1.shapeColor="red";

 }
 else {movingrect.shapeColor="green";
gameObject1.shapeColor="green";
}
//console.log(isTouching());
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2
    && object2.x-object1.x<=object2.width/2+object1.width/2
    && object1.y-object2.y<=object1.height/2+object2.height/2
    && object2.y-object1.y<=object2.height/2+object1.height/2){
 
     return true;

 }
 else{return false;}
}
*/

