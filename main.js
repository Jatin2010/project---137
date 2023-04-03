var video = "";
var status = "";
var input = "";
var objects = [];

 function preload() {
    video = createVideo("video.mp4");
    video.hide();
 }

function setup(){
    canvas = createCanvas(1000,380);
    canvas.center();
}

function draw(){
            
    image(video,0,0,580,380);

    if(status != ""){

        objectDetector.detect(video,gotResult);
    
        document.getElementById('status').innerHTML = "STATUS : OBJECTS DETECTED";

            for (i = 0 ; i < objects.length ; i++){
    
                fill(r,g,b);
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15 );
                noFill();
                strokeWeight(5);
                stroke(r,g,b);
                rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    
            }
        }
    }



function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "STATUS : DETECTING THE OBJECTS";   
    input = document.getElementById('object_name').value;        
    if (input == objects[i].label){
        document.getElementById('status').innerHTML = "STATUS : OBJECTS DETECTED";
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

function modelLoaded() {
    console.log('model loaded');
    video.loop();
    video.speed(1);
    video.volume(0);
    status = true;
}

function gotResult(error,results){
    if (error){
        console.error;
    }
    console.log(results);
    objects = results;

}


