'use strict';

/**
 * Shape object, with added move method
 * 
 * cv=vores canvas
 */
export class Shape {
    constructor(cv, x, y, width, height, color) {
        this.ctx = cv.context; 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
};

/*
cv = vores canvas
r = radius 
dir = retning/direction. True eller false

*/
export class Circle extends Shape {
    constructor(cv, x, y, r, startangle, endangle, color, dir) {
        super(cv, x, y);
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
        this.color = color;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.r, this.startangle, this.endangle, this.direct);
        this.ctx.closePath();

        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }
};