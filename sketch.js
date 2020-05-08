const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var wall6,wall5,wall4,wall3,wall1,wall1;
var window1,window3,window2,window5;
var roof1,roof2,roof3,roof4;

function setup() {

createCanvas(800,600);

engine=Engine.create();
world=engine.world;

wall5=new Wall(480,250,130,250);
wall4=new Wall(350,310,200,100);
wall1=new Wall(400,435,250,150);
wall2=new Wall(230,415,90,190);
wall3=new Wall(570,415,90,190);

window1=new Wall(400,460,70,100);
window1.color="orange"
window3=new Wall(570,370,30,40);
window3.color="orange"
window2=new Wall(230,370,30,40);
window2.color="orange"
window5=new Wall(480,190,50,60);
window5.color="orange"
window6=new Wall(350,335,70,50);
window6.color="orange"

}

function draw() {
 
  background(0); 
  
  Engine.update(engine)

  wall5.display(); 
  wall4.display(); 
  wall2.display(); 
  wall3.display(); 
  wall1.display(); 
 
   window1.display()
   window3.display()
   window2.display()
   window5.display()
   window6.display()

   fill("brown");
   triangle(230,260, 470, 260, 350, 170);
   triangle(400,125,560,125,480,20);
   triangle(510,320,630,320,570,230);
   triangle(170,320,290,320,230,230);
  
  }

