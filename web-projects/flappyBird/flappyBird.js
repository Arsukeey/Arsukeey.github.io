var bird;
var pipes = [];
var score = 0;

//  Inspiration by The Coding Train - however with some added features

function setup() {

    createCanvas(350, 500);

    bird = new Bird();
    pipes.push(new Pipes());

}

//-----------------------------------------------------------

function draw() {

    background(51);

    textSize(26);
    text(score, width / 2, 50);

    //  Updating score
    score += frameCount / 100;
    score = floor(score);

    bird.show();
    bird.update();

    //  Spawn a new pipe every 70 frames
    if (frameCount % 70 == 0) {
        pipes.push(new Pipes());
    }

    for (var i = 0; i < pipes.length; i++) {

        pipes[i].show();
        pipes[i].update();

        //  Deletes an object from the array if offscreen
        if (pipes[i].x < -20) {
            pipes.splice(i, 1);
        }

        //  if i need to test if it touches a pipe (e.g. reset it) but i am too lazy to do this now
        if (pipes[i].isHit(bird)) {
            score = 0;
        }

    }

}

//------------------------------------------------------------
//  Detects if spacebar is pressed

function keyPressed() {

    if (key == ' ') {
        bird.goUp();
        //console.log("space test");
    }

}
