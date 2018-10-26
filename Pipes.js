function Pipes() {

    this.yUpper = random(height / 2);
    this.yBottom = random(height / 2);

    this.x = width;
    this.thickness = 20;
    this.rollingSpeed = 3;

    this.willFill = false; //   decides if its going to color the pipe

    //----------------------------------------------------
    //  Creates the pipes
    this.show = function () {

        fill(255);
        if (this.willFill) {
            fill(200, 0, 0);
        }
        rect(this.x, 0, this.thickness, this.yUpper);
        rect(this.x, height - this.yBottom, this.thickness, this.yBottom);
    }

    //----------------------------------------------------
    //  Push the pipes to the left of the screen
    this.update = function () {

        this.x -= this.rollingSpeed;

    }

    //-----------------------------------------------------
    //  Detects if the Bird touched a pipe
    this.isHit = function (bird) {

        if (bird.y < this.yUpper || bird.y > height - this.yBottom) {
            if (bird.x > this.x && bird.x < this.x + this.thickness) {
                this.willFill = true;
                return true;

            }
        }
    }
}