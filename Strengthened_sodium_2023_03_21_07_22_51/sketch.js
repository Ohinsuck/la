let img;
let slider;
function preload(){
  img = loadImage("https://raw.githubusercontent.com/Ohinsuck/la/main/lost.jk.jpg");
}
function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
  imgslider = createSlider(0.1, 2, 1, 0.1); 
  imgslider.position(10, 10);
}
let a=0;
function draw() {
  let imgSize = imgslider.value();
  background(0,0,189);
 
  rotateX(a);
  rotateY(a);
  texture(img);
  box(200 * imgSize); 
  a += 0.01;
}