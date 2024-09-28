// setup
let meteorX = 0;
let meteorY = 0;
let meteorDiameter = 10;
let meteorSpeed = 0.5;
let meteorColour = '  white';
let catcherDistance = 0;
let catcherDiameter = 40;
let bottomDistance = 0;
let bottomIDistance = meteorDiameter/2;
let catcherIDistance = catcherDiameter/2 + meteorDiameter/2;
let mr = 255;
let mb = 255;
let mg = 255;


function setup() {
// this part only runs once to setup the program
  // create canvas 400 pixels high and 400 pixels wide
  createCanvas(400, 400);
  meteorX = random(400);
  meteorY = random(0);
  meteorSpeed = random(0.5, 5);
  meteorDiameter = random(10, 31);
}

//lets start!
function draw() {
  // this is the infinite loop that runs all the time over 60 times per second!
  background(0,0,0);
  //remove outline?
  noStroke();
  // add meteor
  fill(mr,mg,mb);                                ellipse(meteorX,meteorY,meteorDiameter,meteorDiameter);
  // make variable meteorY bigger to make it drop
  meteorY = meteorY + meteorSpeed;
  //code for catcher / instantiate catcher object
  fill (225,0,225,100)
  ellipse(mouseX,mouseY,catcherDiameter,catcherDiameter)
  // calculate distance between mouse pointer/catcher and meteor 
  catcherDistance = dist(mouseX, mouseY, meteorX, meteorY)
  //stroke(255, 110);
  //line(mouseX, mouseY, meteorX, meteorY);
  // Calculate distance of the meteor from the bottom of the canvas
  bottomDistance = dist (meteorX, 400, meteorX, meteorY);
  //print(catcherDistance);
  // when the distance between the catcher and the meteor is less than the intersept distance then the meteor as been caught
  if (catcherDistance <= catcherIDistance) {
  print('caught');
    // speed and size of meteor should change everytime it has been caught
    meteorSpeed = random(0.5, 5);
  meteorDiameter = random(10, 31);
    // meteor caught go back to random spot and then change colour
    meteorY = random(400);
    meteorX = random(400);
mr = random(255);
mg = random(255);
mb = random(255);
} else {
     print("safe");
}

// if the meteor is less than or equal to the intercept distance reset the meteor to a random possition and colour
  if (bottomDistance <= bottomIDistance) {
    // Touch bottom
    print ("boing");
    // reset meteor
    meteorSpeed = random(0.5, 5);
  meteorDiameter = random(10, 31);
    meteorY = random(400);
    meteorX = random(400);
mr = random(255);
mg = random(255);
mb = random(255);
  } else{
      // do nothing
    print (" non boing");
  }

 // print('catcherDistance = ' + catcherDistance);
  // trying to find out when the catcher touches the meteor
 // catcherIDistance = catcherDiameter/2 - meteorDiameter/2
  //print('catcherIDistance = ' + catcherIDistance);


}
