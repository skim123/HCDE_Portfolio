/*  Created by Sam Kim
    Last edited 02/18/2017
    Exploring the growth of minimum wage from 1990- 2015
    source: http://www.infoplease.com/ipa/A0774473.html
*/

// Declare some global variables
var wage = [3.80,4.25,4.25,4.25,4.25,4.25,4.75,5.15,5.15,5.15,5.15,5.15,5.15,5.15,
        5.15,5.15,5.15,5.85,6.55,7.25,7.25,7.25,7.25,7.25,7.25,7.25]; // declare wage values from 1991 - 2015
var years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,
        2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]; // decalre years 1991 -2 015
var x,y,w,h; //prepare variables for bar graphs

// Draw background
function setup() {
  createCanvas(700, 700); // create background
  text("Evolution of the Minimum Wage Salary from 1990 - 2015", 500, 50, 200, 200); // label the entire graph
  text("Year", 500, 300, 100, 100); // label the Y-axis
  text(" <-- Minimum Wage of that Year ($)", 500, 650, 100, 100); // attempt to label the x-axis
}

// Draw function graph
function draw() {
  noStroke(); // clear canvas
  
  // iterate through the data
  for(var i = 0; i < wage.length; i++) { // call loop formation of graphs from wage values
  
    // calculate position variables
    x = 0; // declare x origin point of bar graphs
    y = (height*(i/wage.length)); // determine the y positions of bar graphs
    w = width/max(wage)*wage[i]; // determine length of bar graph that change depending on wage value
    h = (height/wage.length)-5; // determine the height of bar graphs  which will remain constant
   
   // create the bars and label for wage
    push(); // save parameters and declarations of this drawing function up until pop is declared                
    fill(46,184,0); // fill in green color to match the wage values
    translate(x,y); // moves graph to each position as noted by wage value and position of x in conjuction with the variable i
    rect(0,0,w/2,h); // draws the bar graph
    fill(0); // fill in black color for text that labels each graph
    text(wage[i],50,h/1.5); // draw wage label for each graph
    pop(); // resets drawing context of this section 
  }
  
  //create label for years 
  for (i = 0; i < years.length; i++) { // declare another loop for placing year values and positions
    fill(0); // colors text of the year values black
    text(years[i], 400, 15 + 27 * i); // place year values in correct position aligned with wage values 
  
  }
}
