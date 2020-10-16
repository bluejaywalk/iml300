
document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
    colorMode(HSB, 255);
}

function draw() {
  clear();


  for (i=0; i< width; i+=20) {
    for (j=0; j< height; j+= 20) {
   
      TotalDist = sqrt(sq(i-mouseX) + sq(j-mouseY));
      time = millis();
      hue1 = int(-TotalDist+ time/2)%255;
      hue2 = int(TotalDist + time/10)%255;
      radius =20-TotalDist/50 + 4;

      if(mouseIsPressed == true){
      fill(hue1, 255, 255, 60);
      }
      
      else{
        fill(hue2, 255, 255, 60);
      }
      
      square(i, j, radius);
      
    }
  }
  
}