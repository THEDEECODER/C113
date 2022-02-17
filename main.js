function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 180, 125, 220, 200);
     fill(089, 013, 034);
    stroke(101, 000, 011);
     circle(50, 50, 80);
     circle(500, 50, 80);
     circle(50, 400, 80);
     circle(500,400, 80);
     fill(101, 000, 011);
    stroke(089, 013, 034);
    rect(50, 35, 450, 30);
    rect(50, 390, 450, 30);
    rect(35, 50, 30, 350);
    rect(485, 50, 30, 350);
    }
    function take_snapshot(){
        save('imag1.jpg');
    }