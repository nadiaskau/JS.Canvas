'use strict';

/**
 * Umo object
 */
export class Disk {
  constructor( canvas, x, y, r, color ) {
    this.canvas = canvas;
    this.r = Math.random() * 9 + 3;
    this.color = color;
    this.x = x;
    this.a = 120;
    this.b = 70;
    this.xCenter = canvas.getWidth()/2;
    this.yCenter = canvas.getHeight()/2;
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
        if (this.x + this.dx > this.canvas.getWidth() || this.x + this.dx < 0)
              this.dx = -this.dx;
  this.x += this.dx;
        // a(x-h)^2 + k where h is offset to right, k is offset up
        // http://www.intmath.com/plane-analytic-geometry/4-parabola.php
        this.y = Math.pow(this.x - 200, 2) / 100; //det bliver en parabel - det er en matematisk funktion
//http://www.java2s.com/ref/javascript/html-canvas-animation-oscillation-elliptical-motion-demo-1bfc2.htm
//http://www.java2s.com/ref/javascript/html-canvas-animation-oscillation-elliptical-motion.html

        if (this.y > this.canvas.getHeight())
            this.dx *= -1;
    }


  toString() {
    s = '';
    s += this.x + ':' + this.y + ', ' + this.r + " \n " + this.color;
    return s;
  }
};
