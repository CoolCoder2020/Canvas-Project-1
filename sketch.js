var database;

var drawing =[];

function setup() {
  createCanvas(400,400);
}
database = firebase.database;
var ref = database.ref('drawings');
ref.on('value', gotData , errData);

function draw() {
  background(0);

if(mouseIsPressed){
  var point = {
    x : mouseX,
    y : mouseY
  }
  drawing.push(point);
}

fill(255);
textSize(20);
text("DRAW YOUR IMAGINATION",75,30);

beginShape();
stroke(255);
strokeWeight(4);
noFill();
for(var i = 0; i < drawing.length; i++){
  vertex(drawing[i].x , drawing[i].y);

}
endShape();
}

function gotData(){
  var drawing = data.val();
}

function errData(){
  console.log(err);
}
