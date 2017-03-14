/* Name: Sam Kim & Josh Baker
   Description: Final project. Simon memory skill game.
   Last edited: 03/12/2017
*/


var page = 0; //call back to original page 
var displacement = 25; // sets a 25px offset
var time = 0; // starts time variable at a "0" value
var blinkSequence = [blinkRedSquare, blinkBlueSquare, blinkGreenSquare, blinkYellowSquare]; // defines an array and lists color "blink" functions as elements in the array
var timeValues = [15, 45, 75, 105];  // defines an array for preset timing values

// setup function -------------------------------------------------------------
function setup() {
  createCanvas(800, 800); // sets canvas size of program
  background(235); // defines background color
  noStroke(); // disables stroke
  textSize(40); // sets text size
  shuffle(blinkSequence, true); // randomizes the order of the elements of the blinkSequence array
}  

// draw function --------------------------------------------------------------
function draw() {
  background(235); // defines background color
  if (page == 0) {  // displays start game page
    text('Click to Start', 250, height/2); // displays "Start" text on page 1
  } else { // if page !0 then switches to game screen
    startGame(); // calls startGame function
  }
  
}
// changes between screens ----------------------------------------------------- 
function mousePressed() {
  page = 1;
}

// draws colored squares of Simon game -----------------------------------------
function squares() {
  redSquare();
  blueSquare();
  yellowSquare();
  greenSquare();
}

// function that starts color blinking sequence --------------------------------
function startGame() {
  for (i = 0; i < blinkSequence.length; i++) { // for loop to be repeated for each element in "blinkSequence" array
    blinkSequence[i](timeValues[i], timeValues[i] + 15);
  }
  time = time + 1;
}

// function to make red square blink once --------------------------------------
function blinkRedSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(250, 0, 15);    
  } else if (time < timeEnd) {
    fill(255,128,128);
  }
  rect(width/2 + displacement, displacement, 350, 350);
}

// function to make blue square blink once --------------------------------------
function blinkBlueSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(0, 100, 205);  
  } else if (time < timeEnd) {
    fill(128, 179, 255);
  }
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

// function to make yellow square blink once ------------------------------------
function blinkYellowSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(235, 190, 0);   
  } else if (time < timeEnd) {
    fill(255, 230, 128);
  }
  rect(displacement, height/2 + displacement, 350, 350);
}

// function to make green square blink once -------------------------------------
function blinkGreenSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(10, 175, 90);
  } else if (time < timeEnd) {
    fill(153, 242, 67);
  }
  rect(displacement, displacement, 350, 350);
}


// defines user input / mouse position for red square ----------------------------
function redSquare() {
  if (mouseX >= 425 && mouseX <= 775 && mouseY <= 375 && mouseY >= 25 && mouseIsPressed) {
    fill(255,128,128);
  } else {
    fill(250, 0, 15);
  }
  rect(width/2 + displacement, displacement, 350, 350);
}

// defines user input / mouse position for blue square ---------------------------
function blueSquare() {
  if(mouseX >= 425 && mouseX <= 775 && mouseY >= 425 && mouseY <= 775 && mouseIsPressed) {
    fill(128, 179, 255);
  } else {
    fill(0, 100, 205);
  }
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

// defines user input / mouse position for yellow square -------------------------
function yellowSquare() {
  if(mouseX <= 375 && mouseX >= 25 && mouseY >= 425 && mouseY <= 775 && mouseIsPressed) {
    fill(255, 230, 128);
  } else {
    fill(235, 190, 0);
  }
  rect(displacement, height/2 + displacement, 350, 350);
}

// defines user input / mouse position for green square --------------------------
function greenSquare() {
  if(mouseX <= 375 && mouseX >= 25 && mouseY <= 375 && mouseY >= 25 && mouseIsPressed) {
    fill(124,252,0);
  } else {
    fill(0,200,95);
  }
  rect(displacement, displacement, 350, 350);
}