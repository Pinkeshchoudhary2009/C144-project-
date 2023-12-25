song ="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song= loadSound("music.mp3")
}

function setup(){
    canvas =createCanvas(600,500);
    canvas.center;


    video.createCapture(VIDEO);
    video.hide;

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    img(video,0,0,600,500);
}

function play(){
 song.play;
 song.setVolume;   
 song.rate(1);
}

function modelLoaded(){
    console.log('poseNet is Initilized')
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX =reuslts[0].pose.leftWrist.x;
        leftWristY =reuslts[0].pose.leftWrist.y;

        console.log("leftWristX ="+leftWristX+"leftWristY="+leftWristY);


        rightWristX =reuslts[0].pose.rightWrist.X;
        rightWristY=reuslts[0].pose.rightWrist.Y;

        console.log("leftWristX ="+leftWristX+"leftWristY="+leftWristY);
        
    }
}



function gotPoses(){
    img(video,0,0.600,500)
    fill("red");
    stroke("red");
    if(scoreRightWrist >0.2)
 circle(rightWristX,rightWristY,20)

 if(rightWristY>0 && rightWristY<=100){
    document.getElementById("speed").innerHTML ="speed =0.5x";
    song.rate(0.5);
 }
else if(rightWristY >100 &&rightWristY<=100){
    document.getElementById("speed").innerHTML ="speed =1x";
    song.rate(1);
}

else if(rightWristY >200 &&  rightWristY <=300){
    document.getElementById("speed").innerHTML ="speed =1.5x";
    song.rate(1.5);
}
else if(rightWristY >300 &&rightWristY<=400){
    document.getElementById("speed").innerHTML ="speed =2x";
    song.rate(2);
}
 if(scoreleftWrist>0.2)
{
    circle(leftWristX, leftWristY,20);
    inNumberLeftwristY=Number(leftWristY);
    removeDecimal=floor(inNumberLeftwristY);
    volume=removeDecimal/500;
    document.getElementById("volume").innerHTML="volume = "+volume;
    song.setVolume(volume);
}   
}


