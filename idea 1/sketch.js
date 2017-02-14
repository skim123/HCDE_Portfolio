// noprotect

var video;
var button;
var photoAlbum = [];
var slider;
var canvas;

var ballX;
var ballY;
var ballZ;

function setup() {
  canvas = createCanvas(800, 240, WEBGL);
  background(220);
  canvas.id("p5Canvas");

  video = createCapture(VIDEO);
  video.size(320, 240);
  video.id("p5Video");

  button = createButton("Yup!");
  button.mousePressed(takePhoto);

  // slider = createSlider(0, 100);
  // slider.id("pixelateSlider");

  // var seriously = new Seriously();
  // var src = seriously.source("#p5Video");
  // var target = seriously.target("#p5Canvas");
  // var pixelate = seriously.effect("pixelate");
  // pixelate.amount = "#pixelateSlider";
  // pixelate.source = src;
  // target.source = pixelate;
  // seriously.go();
}

function takePhoto() {
  photoAlbum.push(video.get());
}

function draw() {
  // image(video, 0, 0);
  // change rgb to variate here
  ballX = tint(0, 255, 255);
  // ballY = tint(255, 0, 255);
  // ballX = tint(255, 255, 0);

  var w = 160;
  var h = 120;
  var x = 0;
  var y = 0;

  for (var i = 0; i < photoAlbum.length; i++) {
    image(photoAlbum[i], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
    if (photoAlbum.length > 10) {
      photoAlbum.splice(0, 10);
      x = 0;
      y = 0;
    }
  }

}