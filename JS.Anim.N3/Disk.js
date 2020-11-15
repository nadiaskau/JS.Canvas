'use strict';

/**
 * Umo object
 */
export class Disk {
  constructor( canvas, x, y, r, color ) {
    this.canvas = canvas;
    this.r = r;
    this.color = color;
    this.x = x;
    this.a = 500;
    this.b = 150;
    if ( this.x > this.canvas.getWidth() - this.r * 2 ) { //hvis disken går udover x-aksen
      this.x = this.canvas.getWidth() - this.r * 2;
    } else if ( this.x < this.r * 2 ) {
      this.x = this.r * 2;
    }

    this.y = y;
    if ( this.y > this.canvas.getHeight() - this.r * 2 ) { //hvis disken går udover y-aksen
      this.y = this.canvas.getHeight() - this.r * 2;
    } else if ( this.y < this.r * 2 ) {
      this.y = this.r * 2;
    }

    this.dx = Math.random() * 3;
    this.dy = Math.random() * 3;
    this.e = Math.sqrt(1-(Math.pow(this.b,2)/Math.pow(this.a,2)));

  }

  draw() {
    this.canvas.getContext()
      .beginPath();
    this.canvas.getContext()
      .fillStyle = this.color;
    this.canvas.getContext()
      .arc( this.x, this.y, this.r,
        0, Math.PI * 2,
        false );
    this.canvas.getContext()
      .fill();
    this.canvas.getContext()
      .closePath();
  }

  move() {
        if (this.x + this.dx > this.canvas.getWidth()
        || this.x + this.dx < 0){
          this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y = (1-Math.pow(this.e, 2))*(Math.pow(this.a,2) - Math.pow(this.b,2))/this.y;

        if (this.y > this.canvas.getHeight()){
          this.dx *= -1;
        }
  }


  toString() {
    s = '';
    s += this.x + ':' + this.y + ', ' + this.r + " \n " + this.color;
    return s;
  }
};
