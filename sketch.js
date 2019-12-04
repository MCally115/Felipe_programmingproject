
var diameter = 50;
//setup function only happens once
function setup() {
  createCanvas  (500, 500); //create a 500px X 500px canvas
}


function draw() {
  background(67, 136, 168, 66);
  if (mouseIsPressed) {
ellipse (diameter,235,50,diameter);
fill(0);
background(255, 255,255,100);
textFont("TIMES NEW ROMAN");
fill(0);
text("7:10", width-400, height-130);
fill(255,255,127,200); //white, semi-transparent
ellipse(mouseX+50,mouseY+50,10,10); // follows the mouse, 10px dia
    diameter= 190;
  } else {
    diameter= 99;

    textSize(50);
    textAlign(CENTER);
    textFont("TIMES NEW ROMAN");
    fill(255, 178, 166, 100);
    text("残り35分", width-257, height-130);
    //stars
    stroke(255);
    point(random(0,width),random(0,height));
    point(random(0,width),random(0,height));
    point(random(0,width),random(0,height));
    point(random(0,width),random(0,height));
    point(random(0,width),random(0,height));
    point(random(0,width),random(0,height));
    point(random(0,width),random(0,height));
  }


  //mouseX
  //mouseY
  ellipse (235,150, diameter,diameter);
  ellipse (235,250, diameter, diameter);
  ellipse (235,50, diameter, diameter);
  ellipse (235,440, diameter, diameter);

}
