/*  Written by Sam Kim
    Last edited 02/11/2017
    Creates the interpretation of tranquility vs. chaos. Will you create a little or a lot? 
*/

var myParticles = []; // defining the particles that will fly around the screen in a frenzy

// Create the backdrop
function setup() {
  createCanvas(1200, 800); // create the backdrop and large area 
}

// Define the mouse functions
function mouseDragged() {
  var tempParticles = new Particles(mouseX, mouseY); // creates the various particles that you will randomly floating around
  myParticles.push(tempParticles); // remembers the locations ands creations of the previous particles so that more can be added and none are erased
}

function draw() {
  background(0); // create black background aka subconcious
  
  for (var i = 0; i < myParticles.length; i++) { // length of array
    myParticles[i].display();// show the particles upon a mouse click
    myParticles[i].move(); // command used to make the particles move 
  }
}

// define the random square particles, form, size, direction and confinement within the border
function Particles(x, y) {
  this.x = random(0, width); // randomly generates particle's x-position
  this.y = random(0, height); // randomly generates particle's y-position
  this.speedX = random(0, 2); // randomly generates the speed of the x-direction that the particle will travel
  this.speedY = random(0, 2); // randomly generates the speed of the y-direction that the particle will travel
  this.col = color(random(255), random(255), random(255)); // randomly generates unique color of each particle
  this.diameter = random(1, 30); // randomly generates each particles size
  
  this.display = function() {
    noStroke(); // eliminates borders 
    fill(this.col); // fills the object (in this case, particle) with a random color
    rect(this.x, this.y, this.diameter, this.diameter); // calls the actual shape of the particles 
  }

// Define movement of the particles 
  this.move = function() {
    this.x = this.x + this.speedX; // randomizes movement of particle in the x direction, whether it goes left or right
    this.y = this.y + this.speedY; // randomizes movement of particle in the y direction, whether it goes up or down 

    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
      }// once balls reach certain points as defined by the 'if' statement, going left and right, they turn the opposite directions, keeping within the x-axis borders
    if (this.y > height || this.y < 0) {
      this.speedY *= -1; // once balls reach certain points as defined by the 'if' statemen, going up or down, they turn the opposite directions, keeping within the y-axis borders
    }
  } 
}