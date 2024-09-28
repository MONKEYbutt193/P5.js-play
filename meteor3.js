// setup
let meteorX = 200;
let meteorY = 400;
let meteorDiameter = 10;
let meteorSpeed = 0.5;
let meteorColour = '  green'

function setup() {
// this part only runs once to setup the program
  // create canvas 400 pixels high and 400 pixels wide
  createCanvas(400, 400);
}

//lets start!
function draw() {
  // this is the infinite loop that runs all the time over 60 times per second!
  background(0,0,0);
  //remove outline?
  noStroke();
  // add meteor
  fill(meteorColour);                                ellipse(meteorX,meteorY,meteorDiameter,meteorDiameter);
  // make variable meteorY bigger to make it drop
  meteorY = meteorY -meteorSpeed;
  
  
  //fill(255,255,0);
  //text("hello",200,150);
  //stroke(255,255,255);
  //line(100,100,200,100);
 //fill(224, 224, 224);
 //ellipse(mouseX, mouseY, 50, 50);
}

