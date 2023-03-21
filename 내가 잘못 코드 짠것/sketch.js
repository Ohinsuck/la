let img;
let slider;
function preload(){
  img = loadImage("https://raw.githubusercontent.com/Ohinsuck/la/main/lost.jk.jpg");
}
function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
  Imgslider = createSlider(0, 255, 100);
  Imgslider.position(10, 10);
  
}
let a=0;
function draw() {
  let imgSize = Imgslider.value();
  background(0);
 
  rotateX(a);
  rotateY(a);
  texture(img);
  box(200);
  a += 0.01;
}