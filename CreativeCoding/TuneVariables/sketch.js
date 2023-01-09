//create a program that enables us to customize the number of squares in a grid

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

  for(var i=0; i<windowWidth; i = i + sideLen){
    for (var j = 0; j<windowWidth; j=j +sideLen){
      quad(
        i,j,
        i+sideLen,j,
        i+sideLen,j+sideLen,
        i,j+sideLen);
    }
  }


}
