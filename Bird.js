function Bird() {

    this.x = 65;
    this.y = height / 4;

    this.gravity = 0.9; //  float for more precision
    this.velocity = 0;

    //------------------------------------------------------
    //  Draws the bird

    this.show = function () {

        fill(255);
        ellipse(this.x, this.y, 20, 20);

    }

    //---------------------------------------------------------
    //  Makes the bird fall

    this.update = function () {

        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height) {

            this.y = height;
            this.velocity = 0;

        } else if (this.y < 0) {

            this.y = 0;
            this.velocity = 0;

        }

    }

    //---------------------------------------------------------
    //  Makes the bird fly

    this.goUp = function () {

        this.velocity -= this.gravity * 15;

        // console.log(this.velocity);

    }



}