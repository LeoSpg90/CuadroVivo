var ColorClaro, ColorFondo, randomColor1, randomColor2, randomColor3, randomColor4, x1, x2, y1, y2;

function setup() {
  // put setup code here
  createCanvas(500, 650);
  ColorFondo = color(41, 105, 167);
  ColorClaro = color(210, 214, 203);
  ColorAzul = color(0, 29, 89);
  ColorMarron = color(123, 33, 9);
  x1 = width / 2 + 110;
  y1 = 520;
  x2 = width / 2 + 110;
  y2 = 550;
}

function draw() {

  background(ColorFondo);



  randomColor1 = color(random(255), random(255), random(255));
  randomColor2 = color(random(255), random(255), random(255));
  randomColor3 = color(random(255), random(255), random(255));
  randomColor4 = color(random(255), random(255), random(255));


  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      ColorFondo = randomColor1;
    }

  }
  if (keyIsPressed) {
    if (key == "W" || key == "w") {
      ColorAzul = randomColor3;

    } else if (key == "A" || key == "a") {
      ColorMarron = randomColor4;

    } else if (key == "D" || key == "d") {
      ColorClaro = randomColor2;

    } else if (keyCode == RIGHT_ARROW) {
      x2 += 3;

    } else if (keyCode == LEFT_ARROW) {
      x2 -= 3;
    } else if (keyCode == UP_ARROW) {
      y2 -= 3;
    } else if (keyCode == DOWN_ARROW) {
      y2 += 3;
    }

  }
  noStroke();
  fill(255);
  textSize(20);
  text('Usá las teclas ', 20, 40);
  text('W, A, D,', 20, 65);
  text('las flechas', 20, 90);
  text('y clic izq', 20, 115);
  text('para flashar', 20, 140);




  //
  noStroke();
  fill(ColorMarron);
  rect(width / 2 - 20, 110, 25, 80);
  fill(ColorClaro);
  ellipse(width / 2, 80, 80, 120);

  //rectángulo der cuello
  rect(width / 2 - 5, 110, 25, 80);

  //cuerpo lado izq
  fill(ColorAzul);
  bezier(width / 2 - 20, 170, width / 2 - 230, 140, width / 2 - 50, 500, width / 2 - 20, 530);

  //cuerpo lado der
  fill(ColorClaro);
  beginShape();
  vertex(width / 2 - 20, 190);
  vertex(width / 2 + 110, 190);
  vertex(width / 2 + 20, 500);
  vertex(width / 2 + 65, 500);
  vertex(width / 2 + 65, 650);
  vertex(width / 2 - 20, 650);
  vertex(width / 2 - 20, 500);
  endShape(CLOSE);

  //cuerpo inf lado izq

  fill(ColorMarron);
  stroke(ColorMarron);
  strokeWeight(10);
  strokeJoin(ROUND);
  beginShape();
  vertex(width / 2 - 25, 500);
  vertex(width / 2 - 70, 505);
  vertex(width / 2 - 95, 650);
  vertex(width / 2 - 25, 650);
  endShape(CLOSE);


  //mano
  stroke(0);
  strokeWeight(18);
  line(x1, y1, x2, y2);
  //line(width / 2 + 110, 520, width / 2 + 110, 550);

  //brazo
  stroke(ColorClaro);
  strokeWeight(40);
  line(width / 2 + 110, 210, width / 2 + 110, 450);
  //strokeCap(SQUARE);
  line(width / 2 + 110, 350, width / 2 + 110, 520);







}
document.oncontextmenu = function() {
  return false;
}