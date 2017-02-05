//Edited by Sam Kim
//Last edited: 2/4/17 10:38PM
//An interactive Pikachu whose eyes follow the mouse and can jump

// creating the main variables used to create Pikachu
var page = 0; // calls the first page aka Pikachu eyes
var eyeDirection = 0; //
var head_width = 300; // helps with creating the shape of the head 
var head_height = 300; // same as above 
var jumpValue = 20; // same a
var jumpDir = 1; // 

// setting up page where Pikachu jumps
function setup() {
  createCanvas(1300, 900); // creates a horizontal rectangle canvas
  background(0, 128, 255); // sets the background color to blue
  rectMode(CENTER); // sets rects to be drawn from the center
}

//Creating call to monster function
function draw() {
  background(0, 128, 255); //draws blue background
  pikachu(650, 400 + jumpValue); // draws the pikachu at origin point in the middle
  
// Creating what happens when mouse is clicked. Either eyes move or monster jumps
  if (page == 0) {
    if (mouseX < 650) { //creates movement of eyes and sets paramters of eye movement
      eyeDirection = eyeDirection - 0.5; // right eye movement
      eyeDirection = max (eyeDirection, -head_width/8); // sets limits so eyes don't go past right side of head
    }
    else {
      eyeDirection = eyeDirection + 0.5; // left eye movement
      eyeDirection = min (eyeDirection, head_width/8); // sets limits so eyes don't go past left side of head
    }
  }
  //Pikachu jumping 
  else {
  if (jumpValue > 60 || jumpValue < -70) { //sets how far Pikachu can jump up and down 
                    
	      jumpDir = jumpDir * -1; // speed with which Pikachu moves 
	      }
	  jumpValue = jumpValue + jumpDir; // calculates the paramters with which Pikachu moves up and down 
  }
}

// draws a monster at the x,y location passed
// this monster includes a body, arms, head, ears and feet
function pikachu(x, y) {
  body(x, y + 180); // sets body location
  arms(x, y + 180); // sets arm locations
  head(x, y - 20); // sets head location
  feet(x, y + 420); //sets feet location
  
}
// draws the body of the pikachu at the x, y location
function body(x, y) {
  noStroke(); // eliminates borders
  fill(255, 255, 0); // colors body yellow
  ellipse(x, y + 45, 300, 400); // creates body
}

// draws the arms, NOT CHEST
function arms(x,y) {
  strokeWeight(2); // creates border 
  stroke(51); // thickness of borders
  arc(x + 90, y, 100, 180, 0, 41, PI+QUARTER_PI, OPEN); // creates right arms 
  arc(x - 90, y, 100, 180, 0, 41, PI+QUARTER_PI, OPEN); // creates left arms
}

// draws the head at the x, y location
// the head includes the ears, eyes, nose, mouth and cheeks 
function head(x, y) {
  noStroke(); // eliminates outline
  fill(255, 255, 0); // colors the head yellow
  ellipse(x, y, head_width, head_height); // forms the head
  ears(x, y); // marks ear locations 
  eyes(x + eyeDirection, y); // marks eye locations and added eyeDirection to activate eye movement
  nose(x, y); // marks nose location
  mouth(x, y); // marks mouth locations
  cheeks(x, y); // marks cheek locations
}

// draws the ears at the x, y location
function ears(x, y) {
  noFill(); // clears color palette
  fill(255, 255, 0); // fills main ear part yellow
  ellipse(x + 110, y - 180, 60, 250); // draws main right ear
  ellipse(x - 110, y - 180, 60, 250); // draws main left ear
  noFill(); // clears color palette
  fill(0); // colors ear markings black
  ellipse(x + 110, y - 265, 45, 80); // draws right ear markings
  ellipse(x - 110, y - 265, 45, 80); // draws left ear markings
}

// draws the eyes at the x, y location
function eyes(x, y) {
  noStroke(); //removes borders
  // black part of eyes 
  fill(0); // colors the eyes black
  ellipse(x + 80, y - 25, 55, 55); // create right eye
  ellipse(x - 80, y - 25, 55, 55); // create left eye
  // white part of eyes
  fill(255, 255, 255); //colors the white pare of the small irises?
  ellipse(x + 75, y - 40, 25, 25); // creates right irises
  ellipse(x - 75, y - 40, 25, 25); // creates left irises 
}

// draws the nose at the x, y location
function nose(x, y) {
  fill(0); // makes the nose black
  triangle(x + 10, y + 10, x - 10, y + 10, x, y + 20); // creates nose
}

// Draws mouth at x, y location
function mouth(x, y) {
  noFill(); // leaves the inside of the circle blank
  strokeWeight(2); // make the mouth thin
  stroke(51); // creating line properties of the mouth
  arc(x + 20 , y + 30, 40, 40, 0, PI); // right side of the mouth
  arc(x - 20 , y + 30, 40, 40, 0, PI); // left side of the mouth
}

// draws cheeks at x, y location 
function cheeks(x, y) {
  noStroke(); //eliminates outline
  fill(255, 0, 0); // colors the cheeks red
  ellipse(x + 110, y + 40, 60, 60); // creates right cheek mark
  ellipse(x - 110, y + 40, 60, 60); // creates left cheek mark
}

// Draws feet at x, y location
function feet(x,y) {
  fill(255, 255, 0); // colors feet yellow
  noStroke(); // eliminates borders
  ellipse(x + 120, y, 200, 40); // makinng the right foot
  ellipse(x - 120, y, 200, 40); // making the left foot
}

// Created moues press function to switch between eyes moving and jumping monster
function mousePressed() {
  (page = 1 - page); // calls either page after mouse press
  }
