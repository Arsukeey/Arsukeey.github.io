//  THIS VERSION DOES NOT HAVE PITS BECAUSE THEY ARE TOO ANNOYING!
//  TODO: Make a nice div at everything using p5
//  because otherwise one would override the other and one wouldn't show

let scl;
let player;
let wumpus;
let bats;
let bats1;
let arrows = 3;
let steps = [];

//  The two default functions for p5 to work

function setup() {
    createCanvas(730, 620);
    scl = 100;

    player = pickLocation();
    wumpus = pickLocation();
    bats = pickLocation();
    bats1 = pickLocation();

    if (wumpus.x == bats.x && wumpus.y == bats.y) {

        //  Check if he can skip a square if the square is occupied
        if (!(wumpus.y >= 400)) {
            wumpus.y += 100;
        }
        if (!(wumpus.x >= 400)) {
            wumpus.x += 100;
        }
    }
    if (wumpus.x == bats1.x && wumpus.y == bats1.y) {

        if (!(wumpus.y >= 400)) {
            wumpus.y += 100;
        }
        if (!(wumpus.x >= 400)) {
            wumpus.x += 100;
        }
    }
    if (wumpus.x === player.x && wumpus.y === player.y) {

        if (!(wumpus.y >= 400)) {
            wumpus.y += 100;
        }
        if (!(wumpus.x >= 400)) {
            wumpus.x += 100;
        }
    }

}

//---------------------------------------------------------------------------------------

function draw() {
    if (arrows <= 0) {
        alert("You ran out of arrows. Play Again?");
        window.location.reload(false);
    }
    background(220);
    drawGrid();
    drawDiv();
    fill(255, 0, 0);
    strokeWeight(0);
    rect(player.x, player.y, scl, scl);
    willTouch();
    checkTouch();

}

//---------------------------------------------------------------------------------------
//  Checks if you can shoot

function shoot(dirX, dirY) {
    dirX = dirX + player.x;
    dirY = dirY + player.y;
    if (arrows > 0) {
        if (wumpus.x == dirX && wumpus.y == dirY) {
            alert("Congratulations! You won! Play Again?");
            window.location.reload(false);
        } else {
            arrows--;
            textSize(16);
            fill(255);
            textFont('Georgia');
            text("You have missed.", 10, 500);
            wumpus = pickLocation();
        }
    }
}

//---------------------------------------------------------------------------------------
//  Draws the nice rectangles around the text
function drawDiv() {

    //  Right Rectangle
    fill(120, 90, 120);
    strokeWeight(6);
    rect(503, 5, 225, 110);

    //  Bottom Rectangle
    fill(120, 90, 120);
    strokeWeight(6);
    rect(2, 505, 498, 110);

    textSize(20);
    fill(255);
    textFont('Calibri');
    text("You are in " + player.x / 100 + ", " + player.y / 100, 520, 40);

    textSize(20);
    fill(255);
    textFont('Calibri');
    text("You have " + arrows + " arrows left.", 520, 90);

    //  Fills white space
    fill(255);
    strokeWeight(0);
    rect(502, 120, width, height);

    textSize(20);
    fill(0);
    textFont('Arial');
    text("Hunt the Wumpus was \na game made in BASIC\na long time ago. This\nis a recreation of the\ngame in the p5 Library.\nIn the original game, the \nmap was in a \ndodechaedron shape.\n(While this one is square\n shaped) This version \nDoes not contain pits, \nbecause they're \noverly annoying.\nUpdates coming. Enjoy!", 505, 140);


}


//---------------------------------------------------------------------------------------
//  Checks if the player have touched something (e.g. wumpus)

function willTouch() {
    //  Checking wumpus
    if (player.x == wumpus.x && player.y == wumpus.y) {
        alert("The Wumpus have killed you. Try Again?");
        window.location.reload(false);
    }

    //  Checking bats
    if (player.x == bats.x && player.y == bats.y) {
        player = pickLocation();
        textSize(20);
        fill(255);
        textFont('Georgia');
        text("Bats carried you away!", 10, 590);
    }

    if (player.x == bats1.x && player.y == bats1.y) {

        player = pickLocation();
        textSize(20);
        fill(255);
        textFont('Georgia');
        text("Bats carried you away!", 10, 90);
    }
}

//---------------------------------------------------------------------------------------
//  Literally the same as above but it will just alert the player if he is close
//  Also, this is the most inefficient way to do it, but it is how my process of thought works, so we'll have to deal with it.

function checkTouch() {
    if ((player.x + 100 == wumpus.x && player.y == wumpus.y) || (player.x - 100 == wumpus.x && player.y == wumpus.y) || (player.x == wumpus.x && player.y + 100 == wumpus.y) || (player.x == wumpus.x && player.y - 100 == wumpus.y) || (player.x - 100 == wumpus.x && player.y - 100 == wumpus.y) || (player.x - 100 == wumpus.x && player.y + 100 == wumpus.y) || (player.x + 100 == wumpus.x && player.y - 100 == wumpus.y) || (player.x + 100 == wumpus.x && player.y + 100 == wumpus.y)) {

        //console.log("wumpus next to u");
        textSize(20);
        fill(255);
        textFont('Georgia');
        text("You smell a Wumpus.", 10, 530);
    }
    if ((player.x + 100 == bats.x && player.y == bats.y) || (player.x - 100 == bats.x && player.y == bats.y) || (player.x == bats.x && player.y + 100 == bats.y) || (player.x == bats.x && player.y - 100 == bats.y) || (player.x - 100 == bats.x && player.y - 100 == bats.y) || (player.x - 100 == bats.x && player.y + 100 == bats.y) || (player.x + 100 == bats.x && player.y - 100 == bats.y) || (player.x + 100 == bats.x && player.y + 100 == bats.y)) {
        //console.log("bats next to u");
        textSize(20);
        fill(255);
        textFont('Georgia');
        text("You hear flapping nearby.", 10, 555);
    }
    if ((player.x + 100 == bats1.x && player.y == bats1.y) || (player.x - 100 == bats1.x && player.y == bats1.y) || (player.x == bats1.x && player.y + 100 == bats1.y) || (player.x == bats1.x && player.y - 100 == bats1.y) || (player.x - 100 == bats1.x && player.y - 100 == bats1.y) || (player.x - 100 == bats1.x && player.y + 100 == bats1.y) || (player.x + 100 == bats1.x && player.y - 100 == bats1.y) || (player.x + 100 == bats1.x && player.y + 100 == bats1.y)) {
        //console.log("bats1 next to u");
        textSize(20);
        fill(255);
        textFont('Georgia');
        text("You hear flapping nearby.", 10, 555);
    }
}

//---------------------------------------------------------------------------------------
//  Returns a random position on the grid

function pickLocation() {
    var cols = floor((width - 230) / scl);
    var rows = floor((height - 120) / scl);
    vector = createVector(floor(random(cols)), floor(random(rows)));
    vector.mult(scl);
    return vector;
}
//---------------------------------------------------------------------------------------
//  Called every time a key is pressed

function keyPressed() {
    switch (key) {
        case "w":
            if (player.y <= 0) {
                break;
            } else {
                steps.push(player.x);
                steps.push(player.y);

                player.y -= 100;
                break;
            }

        case "s":
            if (player.y >= 400) {
                break;
            } else {
                steps.push(player.x);
                steps.push(player.y);

                player.y += 100;
                break;
            }

        case "d":
            if (player.x >= 400) {
                break;
            } else {
                steps.push(player.x);
                steps.push(player.y);

                player.x += 100;
                break;
            }

        case "a":
            if (player.x <= 0) {
                break;
            } else {
                steps.push(player.x);
                steps.push(player.y);

                player.x -= 100;
                break;
            }
        case "ArrowUp":
            shoot(0, -100);
            break;

        case "ArrowDown":
            shoot(0, 100);
            break;

        case "ArrowRight":
            shoot(100, 0);
            break;

        case "ArrowLeft":
            shoot(-100, 0);
            break;
    }
}

//---------------------------------------------------------------------------------------
//  i'll let you guess this one

function drawGrid() {
    for (let i = 0; i <= width - 230; i += 100) {
        strokeWeight(2);
        line(i, 0, i, 500);
    }
    for (let j = 0; j <= height - 120; j += 100) {
        strokeWeight(2);
        line(0, j, 500, j);
    }
}
