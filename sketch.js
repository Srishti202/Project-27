const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine , world, roof , chain1 , chain2 , chain3 , chain4 , chain5 , ball1 , ball2 ,ball3 , ball4 , ball5 

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world= engine.world;
roof = new Roof(400,50,300,20)
ball1 = new Ball(325,200)
chain1 = new SlingShot(ball1.body ,{x:325 , y:50})
ball2 = new Ball(375,200)
chain2 = new SlingShot(ball2.body ,{x:375 , y:50})
ball3 = new Ball(425,200)
chain3 = new SlingShot(ball3.body ,{x:425 , y:50})
ball4 = new Ball(475,200)
chain4 = new SlingShot(ball4.body ,{x:475 , y:50})
}

function draw() {
 background ("teal")
roof.display();
ball1.display();
chain1.display();
ball2.display();
chain2.display();
ball3.display();
chain3.display();
ball4.display();
chain4.display();
Engine.update(engine);
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50})
  }
}