'use strict';

/**
 * Umo object 
 */
export class Umo {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.r = Math.random() * 9 + 3;
        this.x = Math.random() * (this.canvas.getWidth() - this.r * 2);
        if(this.x > this.canvas.getWidth() - this.r * 2){ //hvis disken går udover x-aksen
            this.x = this.canvas.getWidth() - this.r * 2;
        }
        else if(this.x < this.r * 2){
            this.x = this.r * 2;
        }

        this.y = Math.random() * (this.canvas.getHeight() - this.r * 2) //hvis disken går udover y-aksen
        if(this.y > this.canvas.getHeight() - this.r * 2){
            this.y = this.canvas.getHeight() - this.r * 2;
        }
        else if(this.y < this.r * 2){
            this.y = this.r * 2;
        }

        this.dx = Math.random() * 3;
        this.dy = Math.random() * 3;
        this.color = color;
        console.log(this.r);
    }

    draw() {
        this.canvas.getContext().beginPath();        
        this.canvas.getContext().strokeStyle = '#222';
        this.canvas.getContext().fillStyle = this.color;
        this.canvas.getContext().arc(this.x, this.y, this.r,
                                     0, Math.PI * 2,
                                     false);
        this.canvas.getContext().fill();
        this.canvas.getContext().stroke();
        this.canvas.getContext().closePath();
    }

    move() {
        if (this.x + this.dx + this.r > this.canvas.getWidth()
                || this.x + this.dx - this.r < 0)
              this.dx = -this.dx;
        if (this.y + this.dy + this.r > this.canvas.getHeight()
                || this.y + this.dy - this.r < 0)
              this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
    }

    toString() {
        s = '';
        s += this.x + ':' + this.y + ', ' + this.r + " \n " + this.color;
        return s;
    }
};
