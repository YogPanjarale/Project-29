const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var h = 40;



function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground1 =new  Ground(300,350,200,15)
    ground2 =new  Ground(600,250,200,15)
      b1 = new Box(300-80,300,200/8,h,"blue")
      b2 = new Box(300-80 +25,300,200/8,h,"blue")
      b3 = new Box(300-80 +50,300,200/8,h,"blue")
      b4 = new Box(300-80 +75,300,200/8,h,"blue")
      b5 = new Box(300-80+100,300,200/8,h,"blue")
      b6 = new Box(300-80 +125,300,200/8,h,"blue")
      b7 = new Box(300-80+150,300,200/8,h,"blue")
      b9 = new Box(300-80 +25,250,200/8,h,"pink")
      b10 = new Box(300-80 +50,250,200/8,h,"pink")
      b11 = new Box(300-80 +75,250,200/8,h,"pink")
      b12 = new Box(300-80+100,250,200/8,h,"pink")
      b13 = new Box(300-80 +125,250,200/8,h,"pink")
      b14 = new Box(300-80 +50,200,200/8,h,"light blue")
      b15 = new Box(300-80 +75,200,200/8,h,"light blue")
      b16 = new Box(300-80+100,200,200/8,h,"light blue")
      b17 = new Box(300-80+75,150,200/8,h)
     // b14 = new Box(300-80+150,250,200/8,50)
     // b1 = new Box(300-80,300,200/8,50)
     ba1 = new Box(600-80 +25,250-100,200/8,h,"pink")
     ba2 = new Box(600-80 +50,250-100,200/8,h,"pink")
     ba3 = new Box(600-80 +75,250-100,200/8,h,"pink")
     ba4 = new Box(600-80+100,250-100,200/8,h,"pink")
     ba5 = new Box(600-80 +125,250-100,200/8,h,"pink")
     ba6 = new Box(600-80 +50,200-100,200/8,h,"light blue")
     ba7 = new Box(600-80 +75,200-100,200/8,h,"light blue")
     ba8 = new Box(600-80+100,200-100,200/8,h,"light blue")
     ba9 = new Box(600-80+75,150-100,200/8,h)
     
   poly = new polygon(150,200);
  sling = new SlingShot(poly.body,{x:150,y:200})
}

function draw(){
    background(20,30,30);
    Engine.update(engine);

      ground1.display();
      ground2.display();
      b1.display();
      b2.display()
      b3.display()
      b4.display()
      b5.display()
      b6.display()
      b7.display()
     // b8.display();
      b9.display();
      b10.display();
      b11.display();
      b12.display();
      b13.display();
      b14.display();
      b15.display();
      b16.display();
      b17.display();
     
      ba1.display();
      ba2.display();
      ba3.display();
      ba4.display();
      ba5.display();
      ba6.display();
      ba7.display();
      ba8.display();
     ba9.display();
     fill("yellow")
     polyshape(poly.body.position.x,poly.body.position.y,25,6)
     sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function polyshape(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }