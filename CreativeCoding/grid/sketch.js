function setup() {//runs once
  createCanvas(720,720);// creates a canvas 720px by 720px
  background(255,0,0);//background color
}

function draw() {//runs in a loop
  fill(255,0,0);//fills in the shape
  strokeWeight(8);//assigns stroke weight
  translate(60,60); //creates a new origin at 60,60
  quad(
    0,0,
    300,0,
    300,300,
    0,300);
    quad( //add 300 in the x direction
      300,0,
      600,0,
      600,300,
      300,300
    );
    quad( //add 300 to x direction
      0,300,
      300,300,
      300,600,
      0,600);
    quad( //add 300 to everything
      300,300,
      600,300,
      600,600,
      300,600
    );



}
