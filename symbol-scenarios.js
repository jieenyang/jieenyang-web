let width_range = 0;
let is_negative = false;

function find_width_range(Width) {
  if (0 <= Width && Width <= 100) {
    width_range = 5;
    is_negative = false;
  } else if (100 < Width && Width <= 200) {
    width_range = 10;
    is_negative = false;
  } else if (200 < Width) {
    width_range = 15;
    is_negative = false;
  } else if (Width < 0) {
    is_negative = true;
  }
}

function setup() {
  createCanvas(360, 280);

  longitudeInput = createInput("0", "number").size(60, 20);
  latitudeInput = createInput("0", "number").size(60, 20);
  widthInput = createInput("0", "number").size(60, 20);

  longitudeInput.position(100,185);
  latitudeInput.position(100,215);
  widthInput.position(100,245);

  longitudeInputLabelPrefix = createElement('p', 'Longitude is');
  longitudeInputLabelPrefix.position(
    longitudeInput.x - 95,
    longitudeInput.y - 15);

  longitudeInputLabelSuffix = createElement('p', 'degrees');
  longitudeInputLabelSuffix.position(
    longitudeInput.x + 70,
    longitudeInput.y - 15);

  latitudeInputLabelPrefix = createElement('p', 'Latitude is');
  latitudeInputLabelPrefix.position(
    latitudeInput.x - 82,
    latitudeInput.y - 15);

  latitudeInputLabelSuffix = createElement('p', 'degrees');
  latitudeInputLabelSuffix.position(
    latitudeInput.x + 70,
    latitudeInput.y - 15);
  
  widthInputLabelPrefix = createElement('p', 'Width is');
  widthInputLabelPrefix.position(
    widthInput.x - 63,
    widthInput.y - 15);

  widthInputLabelPrefix = createElement('p', 'pixels');
  widthInputLabelPrefix.position(
    widthInput.x + 70,
    widthInput.y - 15);

}

function draw() {

  background(220);
  
  fill(200,225,255);
  stroke(0);
  beginShape();
  vertex(0,0);
  vertex(360,0);
  vertex(360,180);
  vertex(0,180);
  vertex(0,0);
  endShape();
  
  fill(0);

  long = Number(longitudeInput.value());
  lat = Number(latitudeInput.value());
  dataValue = Number(widthInput.value());
  
  let x = long + 180;
  let y = 90 - lat;

  find_width_range(dataValue);

  if (long < -180 || long > 180) {
    console.log("invalid input");
  } else if (lat < -90 || lat > 90) {
    console.log("invalid input");
  } else if (is_negative == false) {
    circle(x, y, width_range);
  } else if (is_negative == true) {
    stroke(255,0,0);
    line(x - 10, y - 10, x + 10, y + 10,);
    line(x - 10, y + 10, x + 10, y - 10,);
  }

}
