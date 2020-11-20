var canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    colorMode(HSB, 255, 255, 255);
}


function draw(){
    clear();
   
  for (i=0; i< width; i+=15) {
    for (j=0; j< height; j+= 15) {
   
      TotalDist = sqrt(sq(i-mouseX) + sq(j-mouseY));
      time = millis();
      hue1 = int(-TotalDist+ time/2)%255;
      hue2 = int(TotalDist + time/10)%255;
     // radius =20-TotalDist/50 + 4;

      if(mouseIsPressed == true){
      fill(hue1, 20, 255, 20);
      }
      
      else{
        fill(hue2, 20, 255, 20);
      }
      
        noStroke();
        square(i, j, 15);
      
    
  }
  }
    
}
