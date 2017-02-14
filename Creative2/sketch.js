//Written by Sam Kim
//Last edited 02/11/2017
//A program with a spinning cube projector that has your face and you can have a dance party by clicking on the background

var imageFeed; // to connect with camera
var theta = 0; // start the angle at zero 
var bgcolor; // define variable to change the background colors upon a mouseclick


//Setup canvas as well as defining needed functions and variables. 
function setup() {
	createCanvas(1000, 900, WEBGL); // I learned it is imperative that you add the WEBGL to be able to acccess the 3D element and use 3D objects 
	bgcolor = color(200); // trick the user into a false sense of security with a dull background
	imageFeed = createCapture(VIDEO); // needed to acees the video feed from a laptop. Alternatively this would be impossible if you didn't have a webcam
	imageFeed.hide(); // Theoretically, you already have an original feed that shows up on the bottom that needs to be hidden away, hence this command
	createButton("PARTY TIME!!!"); //created button to let you know to click to change colors
}

// Create color changing background function
function mousePressed () { // clicking the mouse allows for the colors to be changed
  bgcolor = color(random(0, 170), random(0, 170), random(0, 170)); // defines the randomized values that color the background
}

// Create the cube projector
function draw() {
  background(bgcolor); //define the background so that the colors can be changed
	rotateX(theta * 0.05); // determines movements of the z coordinate of the cube
	rotateY(theta * 0.05); // determines movements of the x coordinate of the cube
	rotateZ(theta * 0.05); // determines movements of the y coordinate of the cube
	texture(imageFeed); // color the cube but with a twist: all six sides of the cube are adornred with the webcam feed
	box(mouseX, mouseY, 400); // alternatively you don't need to define the object as a cube as calling it a box has the same effect. Also added in a little treat to change the dimensions of the cube based on mouse movement for added party fun times. 
	theta += 0.05; // actually causes the cube to move in random directions, similar to how you can move an object by manipulating x and y coordinate in a 2d plane. 
}