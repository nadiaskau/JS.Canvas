/*
Source: http://dkexit.eu/webdev/site/ch11s05.html 
Author: NML
*/ 

export class Shape {
    constructor(cv, x, y, color) {
        this.ctx = cv.getContext('2d');
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.closePath();

        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }
};

export class Rect extends Shape {
    constructor(cv, x, y, width, height, color) {
        super(cv, x, y, color);
        this.width = width;
        this.height = height;
    }
};

export class Circle extends Shape {
    constructor(cv, x, y, r, startangle, endangle, color, dir) {
        super(cv, x, y, color);
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
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

export class Ellipse extends Shape {
    constructor(cv, x, y, r, startangle, endangle, color, dir, scx, scy, rot) {
        super(cv, x, y, color);
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
        this.scalex = scx;
        this.scaley = scy;
        this.rotate = rot;
    }

    draw() {
        this.ctx.save();
        this.ctx.scale(this.scalex, this.scaley);
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.r, this.startangle, this.endangle, this.direct);
        this.ctx.closePath();
        this.ctx.restore();

        this.ctx.rotate(this.rotate);
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }
};