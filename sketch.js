var drawing = [];

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  

  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
  }
  
  drawing.push(point);

}
  beginShape();
  stroke(255);
  strokeWeight(4);
  noFill();
  for(var i = 0; i < drawing.length; i++) {
  vertex(drawing[i].x , drawing[i].y)
}
  drawSprites();
}