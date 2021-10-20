nosex=0;
nosey=0;

function preload(){
clown=loadImage('image.png')
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if(results.length>0){
console.log("nose x="+results[0].pose.nose.x);
console.log("nose y="+results[0].pose.nose.y);
nosex=results[0].pose.nose.x-18;
nosey=results[0].pose.nose.y;
}
}
function modelLoaded(){
console.log("poseNet is initialised");
}
function draw(){
image(video,0,0,300,300);
image(clown,nosex,nosey,50,50);
}
function take_snapshot(){
save('myfilterimage.png');
}