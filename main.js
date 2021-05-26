
var img="";
var status  = "";
object = [];
function preload(){
img= loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
image(video,0,0,300,300);
if(status != ""){
    objectDetector.detect(video,gotResult);
r = random(255);
g = random(255);
b = random(255);
    for(i=0; i<object.length; i++){

document.getElementById("status").innerHTML = "Status: Objects Detected";
document.getElementById("objects").innerHTML = "Number Of Objects Detected is/are: "+object.length;
fill(r,g,b);
percent = floor(object[i].confidence * 100);

text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke(r,g,b);
rect(object[i].x,object[i].y,object[i].width,object[i].height);
       /*
fill("pink");
text("Dog",130,70);
noFill();
stroke("maroon");
strokeWeight(5);
rect(100,50,250,500);
fill("yellow");
text("Cat",310,100);
noFill();
stroke("green");
rect(280,80,250,500);
*/
    }
}
}

function modelLoaded(){
    console.log("cocossd is loaded");
status = "true";
}

function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        object=results;
    }
}