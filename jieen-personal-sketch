let rectangle_width = 60;
let rectangle_height = 40;

let x_position = -rectangle_width;
let x2_position = -rectangle_width;

let speed = 2;
let speed2 = 4;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(250,150,150);

  x_position = x_position + speed;
  x2_position = x2_position + speed2;


  if (x_position > 400) {
    x_position = -rectangle_width;
  }
  
    if (x2_position > 400) {
    x2_position = -rectangle_width;
  }

  fill(250, 100, 250);
  rect(x_position, 100, rectangle_width, rectangle_height);
  
  fill(100, 0, 100);
  rect(x2_position, 200, rectangle_width, rectangle_height);

}
