// setup
let meteorX = 200;
let meteorY = 0;
let meteorDiameter = 10;
let meteorSpeed = 0.5;
let meteorColour = '  green';
let catcherDistance = 0;


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
  meteorY = meteorY + meteorSpeed;
  //code for catcher / instantiate catcher object
  fill (225,225,255,100)
  ellipse(mouseX,mouseY,40,40)
  // calculate distance between mouse pointer/catcher and meteor
  
}
