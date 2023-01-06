function setup() {//runs once
  createCanvas(720,720);// creates a canvas 720px by 720px
  background(15,30,4);//background color
}

function draw() {//runs in a loop
  fill(255,0,0);//fills in the shape
  strokeWeight(8);//assigns stroke weight
  translate(60,60); //creates a new origin at 60,60
  // quad(
  //   0,0,
  //   300,0,
  //   300,300,
  //   0,300);
  for(var i=0; i<600; i = i + 300){
    for (var j = 0; j<600; j=j +300){
      quad(
        i,j,
        i+300,j,
        i+300,j+300,
        i,j+300);
    }
  }


}
