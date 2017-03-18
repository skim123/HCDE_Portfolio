//Sam Kim
//last edited: 
//The portrait is four characters from the Super Mario Game series, Mario, Luigi, Wario & Waluigi. 
//The four characters will start in the corner and meet in the middle at varying speeds based on their attributes. 

//Declaring variables for figure's starting positions 
var marioXpos= 10; // This is the x variable for Mario.
var marioYpos= 6; // This is the y variable for Mario.
var luigiXpos= 1130; // This is the x variable for Luigi.
var luigiYpos= 6; // This is the xy variable for Luigi.
var warioXpos= 10; // This is the x variable for Wario.
var warioYpos= 646; // This is the y variable for Wario.
var waluigiXpos= 1130; // This is the x variable for Luigi.
var waluigiYpos= 656; // This is the y variable for Luigi.


var dirMarioX = 3 // This calls how fast Mario will move in the x direction. Mario is an average characters and runs at average speed
var dirMarioY = 3 // This calls how fast Mario will move in the y direction.
var dirLuigiX = 5 // This calls how fast Luigi will move in the x direction. Luigi is a bit speedier than this brother. 
var dirLuigiY = 5 // This calls how fast Luigi will move in the y direction.
var dirWarioX = 0.5 // This calls how fast Wario will move in the x direction. Wario is big and tiny so he moves slower
var dirWarioY = 0.5// This calls how fast Wario will move in the y direction.
var dirWaluigiX = 3 // This calls how fast Waluigi will move in the x direction. Waluigi is the lankier character and has unpredictable movement
var dirWaluigiY = 5 // This calls how fast Waluigi will move in the y direction.

function setup() {
  //Set canvas and parameters for screen
  createCanvas(1300, 800); // Created the window and space for the figures to inhabit
  background(120, 200, 255); // I liked the background color from the example shown in class so I've decided to keep it.
}

function draw() {
  background(120, 200, 255); //Create colored background. While I thought this action was repetitive, if not called again,the figures will blur as they move f
  Mario(); // defining the Mario figure
  Luigi(); // defining the Luigi figure
  Wario(); // defining the Wario figure
  Waluigi(); // defining the Waluigi figure
}

function Mario() {
  noStroke(); // Removes borders for all figures
  fill(255, 0, 0); // This calls the red color for the hat.
  rect(marioXpos, marioYpos, 50, 50); // This calls Mario's hat
  fill(255, 204, 153); // This calls the color of Mario's face.
  rect(marioXpos, marioYpos+24, 50, 50) // This calls Mario's face
  fill(51, 51, 255) // This calls the blue color of Mario's pants
  rect(marioXpos, marioYpos+74, 50, 40) //This calls Mario's pants
  fill(0) //This calls the black color of Mario's moustache.
  rect(marioXpos+10, marioYpos+54, 30, 10) // This calls the moustache for Mario.
  marioXpos = marioXpos + dirMarioX // This calls the X-movement and speed of Mario.
  marioXpos = min(marioXpos + 1, 460); // This will make sure Mario stops at 640 on the x-axis.
  marioYpos = marioYpos + dirMarioY; // This calls the Y-movement and speed of Mario. 
  marioYpos = min(marioYpos + 1, 258); // This will make sure that Mario stops at 258 on the y-axis. 
}
 
function Luigi() {
  fill(0, 153, 0); // This calls the green color for the hat.
  rect(luigiXpos, luigiYpos, 50, 35); // This calls Luigi's hat.
  fill(255, 204, 153); //This calls the color of Luigi's face.
  rect(luigiXpos, luigiYpos+24, 50, 50) // This calls Luigi's face. 
  fill(51, 51, 255) // This calls the blue color of Luigi's pants. 
  rect(luigiXpos, luigiYpos+74, 50, 50) // This calls Luigi's pants. 
  fill(0) //This calls the color of Luigi's moustache.
  rect(luigiXpos + 10, luigiYpos+54, 30, 10) // This calls Luigi's moustache. 
  luigiXpos = luigiXpos - dirLuigiX; // This calls the X-movement and speed of Luigi. 
  luigiXpos = max(luigiXpos - 1, 530); // This will make sure that Luigi stops at 530 on the x-axis.
  luigiYpos = luigiYpos + dirLuigiY; // This calls the Y-movement and speed of Luigi.
  luigiYpos = min(luigiYpos + 1, 250); // This will make sure that Luigi stops at 250 on the y-axis. 
}

function Wario() {
  fill(255, 255, 0); // This calls the yellow color for the Wario's hat.
  rect(warioXpos, warioYpos, 80, 30); // This calls Wario's hat. 
  fill(255, 204, 153); // This calls the color of Wario's face.
  rect(warioXpos, warioYpos + 24, 80, 50) // This calls in Wario's face.
  fill(102, 0, 204) // This calls for the purle color of Wario's pants.
  rect(warioXpos, warioYpos + 74, 80, 50) // This calls Wario's pants. 
  fill(0) // This calls for the black color of Wario's moustache. 
  rect(warioXpos+20, warioYpos + 54, 40, 10) //This calls Wario's moustache.
  warioXpos = warioXpos + dirWarioX; // This calls the X-movement and speed of Wario.
  warioXpos = min(warioXpos + 1, 600); // This will make sure that Wario stops at 600 on the x-axis.
  warioYpos = warioYpos - dirWarioY;// This calls the Y-movement and speed of Wario.
  warioYpos = max(warioYpos - 1, 250); // This will make sure that Wario stops at 250 on the y-axis. 
}

function Waluigi() {
  fill(102, 0, 204); // This calls the purple color of Waluigi's hat.
  rect(waluigiXpos, waluigiYpos, 50, 30); //This calls Waluigi's hat. 
  fill(255, 204, 153); // Thhis calls the color of Waluigi's face.
  rect(waluigiXpos, waluigiYpos + 14, 50, 50) // This calls Waluigi's face. 
  fill(0) // This calls for the black color of Waluigi's pants. 
  rect(waluigiXpos, waluigiYpos + 64, 50, 50) // This calls Waluigi's pants. 
  fill(0) //This calls for the black color of Waluigi's moustache.
  rect(waluigiXpos + 10, waluigiYpos + 44, 30, 10) //This calls for Waluigi's moustache. 
  waluigiXpos = waluigiXpos - dirWaluigiX; // This calls the X-movement and speed of Waluigi.
  waluigiXpos = max(waluigiXpos - 1, 700); // This will make sure that Waluigi stops at 700 on the x-axis.
  waluigiYpos = waluigiYpos - dirWaluigiY; // This calls the Y-movement and speed of Waluigi. 
  waluigiYpos = max(waluigiYpos - 1, 260); // This will make sure that Waluigi stops at 260 on the y-axis. 
}
