const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var slingShot,polygon;
var platform1,platform;
var mConstraint;
var score;


function preload(){
 // sling = loadIamge("polygon.png");
 backgroundImg = loadImage("brightligth.png");
getBackGroundImage();
}

function setup(){
  var canvas = createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

 score = 0;
  ground = new Ground (400,550,800,30);
  polygon = new Polygon(150,300,50,50);
  platfrom1 = new Ground (400,450,300,10);
  platfrom2 = new Ground (600,280,200,10);
  slingShot = new SlingShot(polygon.body,{x:150,y:300});

  box1 = new Box(310,430,30,40);
  //this.box1.fill("red");
  box2 = new Box(345,430,30,40);
  box3 = new Box(380,430,30,40);
  box4 = new Box(415,430,30,40);
  box5 = new Box (450,430,30,40);
  box6  = new Box(485,430,30,40);
  box7 = new Box(520,430,30,40);
  box8 = new Box(345,390,30,40);
   box9 = new Box(380,390,30,40);
   box10 = new Box(415,390,30,40);
   box11 = new Box(450,390,30,40);
   box12 = new Box(485,390,30,40);
   box13 = new Box(380,350,30,40);
   box14 = new Box(415,350,30,40);
   box15 = new Box(450,350,30,40);
   box16 = new Box(415,310,30,40);
   box17 = new Box(535,275,30,40);
   box18 = new Box(570,275,30,40);
   box19 = new Box(605,275,30,40);
   box20 = new Box(640,275,30,40);
   box21 = new Box(675,275,30,40);
   box22 = new Box(570,205,30,40);
   box23 = new Box(605,205,30,40);
  box24 = new Box(640,205,30,40);
   box25 = new Box(605,170,30,40);
  


}  

function draw(){
  background(135);
  Engine.update(engine);

  ground.display();
  platfrom1.display();
  platfrom2.display();
  polygon.display();
  slingShot.display();
  noStroke();
  textSize(35);
  fill ("white");
  text("score "+score,width-300,50);
  box1.display();
 box1.score();
  
  box2.display();
  box2.score();
 // text("SCORE :"+score,550,40);
  box3.display();
  box3.score();
 // text("SCORE :"+score,550,40);
  box4.display();
  box4.score();
 // text("SCORE :"+score,550,40);
  box5.display();
  box5.score();
 // text("SCORE :"+score,550,40);
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
 box9.display();
 box9.score();
 //text("SCORE :"+score,550,40);
  box10.display();
  box10.score();
  box11.display();
  box11.score();
 box12.display();
 box12.score();
 box13.display();
 box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
 box24.display();
 box24.score();
 box25.display();
 box25.score();


}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}


 function keyPressed(){
   if(keyCode===32){
     Matter.Body.setPosition(polygon.body,{x:150,y:300})
     slingShot.attach(polygon.body);
   }
 }
 async function getBackGroundImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json() 
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11,13);
       console.log(hour);
       if(hour>=6 && hour<=18 ){
          brightLight = "darklight.jpg";
           }
           else{
             brightLight  = "brightligth.png";
           } 
           backgroundImg = loadImage(brightligth);
          }
  
  