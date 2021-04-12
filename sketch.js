
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);  
    engine = Engine.create();
  	world = engine.world;
    Engine.run(engine);

  roof1 = new Ground(600,200,400,20);
	bob1 = new Bob(500,500,50);
	bob2 = new Bob(550,500,50);
 	bob3 = new Bob(600,500,50);  
	bob4 = new Bob(650,500,50);
	bob5 = new Bob(700,500,50);
  rope1 = new Rope(bob1.body,roof1.body,-130,0);
  rope2 = new Rope(bob2.body,roof1.body,-80,0);
  rope3 = new Rope(bob3.body,roof1.body,-40,0);
  rope4 = new Rope(bob4.body,roof1.body,0,0);
  rope5 = new Rope(bob5.body,roof1.body,50,0);

	


}
function draw() {
  rectMode(CENTER);
  background("White");
  Engine.update(engine);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  
  //rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
  drawSprites(); 
}

function keyPressed() {if (keyCode === UP_ARROW)
  { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-20}); } }




