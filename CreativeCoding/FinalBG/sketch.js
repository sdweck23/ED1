//create a program that enables us to customize the number of squares in a grid
let gif;


function preload (){
  gif = loadImage('assets/snowflakeAnimation.gif');
}


function setup() {//runs once
  createCanvas(windowWidth,windowHeight);// creates a canvas 720px by 720px
  // background("purple");//background color
}

function draw() {//runs in a loop
  fill("pink");//fills in the shape
  strokeWeight(1);//assigns stroke weight
  // quad(
  //   0,0,
  //   300,0,
  //   300,300,
  //   0,300);
  var num = 50 //number of side in the array
  var sideLen = windowWidth/num; //side length variable

  for(var y=0; y<windowWidth; y = y + sideLen){
    for (var x = 0; x<windowWidth; x = x + sideLen){
      image(gif, x, y, windowWidth/num, windowWidth/num); //img for image
    }
  }


}
