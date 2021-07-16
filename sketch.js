var br;
var bg;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  br = createButton("red");
  br.position(100,50);
  br.mousePressed(rbg);

  bg = createButton("green");
  bg.position(300,50);
 bg.mousePressed(gbg);


}




function draw() {
  background(r,g,b);
}

function rbg()
{
  r = 255;
  g = 0;
  b= 0;
}

function gbg()
{
  r = 0;
  g = 255;
  b= 0;
}