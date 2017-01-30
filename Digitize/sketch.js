// Porter Robinson Worlds Cover Art Wallpaper

var COLOR = {};

function setup() {
  // Create the canvas and background, I'm not nearly good enough to create all those clouds in the background
  createCanvas(190, 190);
  background(15, 172, 235);
  
  //Determing color of the hand and the sections in between the hands
    COLOR.SKIN = color(71.4, 10.2, 85.9); // Skin color of hand
    COLOR.SPACE = color(15, 172, 235); //Color of background in between spaces of fingers 
}

function draw() {

    // draw palm
    push(); // helps keep drawing information together with other shapes so it's not a jumbled mess, continue this description for all other related tags
    translate(50, 75); // moving shapes defined to their proper locations, continue this description to other tags 
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .1)); //filling in shapes with proper colors. Also, lerpColor is used to blend the previous two colors given values above and 0.1 is near the first color
    rectMode(CORNER); // Modifies the location from which rectangles are drawn by changing the way in which parameters given to rect() are interpreted. Continued functions below 
    rect(0, 0, 72.5, 75); // Basically, the first two parameters are the location of one corner while the last two parameters are locations of the opposite corners, continued functions below
    pop(); // as the push function saves the information written previously in these lines, the pop function restores previous settings so that you are essentially starting over until the push function is used again.

    // drawing the itty bitty pink finger
    push(); // after learning about functions in today's class, I realize the push and pop are similar to how functions operate in that that they store the longer code (or previously mentioned code) so that you don't have to retype the same information again and again
    translate(105, 30);
    rectMode(CORNER);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .1));
    rect(0, 0, 17.5, 70);
    pop();

    // drawing the middle finger
    push();
    translate(85, 17.5);
    rectMode(CORNER);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .5));
    rect(2, 2, 20, 77.5);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .1));
    rect(0, 0, 20, 77.5);
    pop();

    // drawing the middle finger
    push();
    translate(67.5, 10);
    rectMode(CORNER);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .5));
    rect(2, 2, 20, 83.5);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .1));
    rect(0, 0, 20, 83.5);
    pop();

    // drawing the index finger
    push();
    translate(47.5, 20);
    rectMode(CORNER);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .5));
    rect(2, 2, 20, 75);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .1));
    rect(0, 0, 20, 75);
    pop();


    // drawing the thumb
    push();
    translate(35, 65);
    rectMode(CORNER);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .5));
    rect(2, 2, 20, 50);
    fill(lerpColor(COLOR.SKIN, COLOR.SPACE, .1));
    rect(0, 0, 20, 50);
    pop();
}