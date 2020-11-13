'use strict';

/**
 * Umo object
 */

export class Umo2 {
constructor( canvas, color) {
    this.canvas = canvas;
    this.color = color;
    this.size = size;
  }
};

export class Rect extends Umo2 {
  constructor(canvas, color) {
    super(canvas, color);

    this.size = size;
    
    this.dx = Math.random() * 3;
    this.dy = Math.random() * 3;

    this.width = Math.random() * 30 + 3;
    this.height = Math.random() * 30 + 3;

    this.x = Math.random() * ( this.canvas.getWidth() - this.width );
    this.y = Math.random() * ( this.canvas.getHeight() - this.height);

  }

  draw() {

    this.canvas.getContext()
      .beginPath();
      if(this.x < 0) //Hvis den bliver tegnet udenfor vores canvas
      {
          this.x = 2;
      }
      else if (this.x > this.canvas.getWidth() - this.width) {
          this.x = this.canvas.getWidth() - this.width;
      }

      if(this.y < 0)
      {
          this.y = 2;
      }
      else if (this.y > this.canvas.getHeight() - this.height) {
          this.y = this.canvas.getHeight() - this.height;
      }

      this.canvas.getContext().moveTo(this.x, this.y);
      this.canvas.getContext().rect(this.x, this.y, this.width, this.height);
      this.canvas.getContext().closePath();
      this.canvas.getContext().lineWidth = 2;
      this.canvas.getContext().fillStyle = this.color;
      this.canvas.getContext().fill();
  }

  move() {

    if ( this.x + this.dx + this.width > this.canvas.getWidth() ||
      this.x + this.dx - this.width < 0 )
      this.dx = -this.dx;
    if ( this.y + this.dy + this.height > this.canvas.getHeight() ||
      this.y + this.dy - this.height < 0 )
      this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
  }

};


export class Circle extends Umo2{
  constructor(canvas, color) {
    super(canvas, color);

    this.dx = Math.random() * 3;
    this.dy = Math.random() * 3;

    this.r = Math.random() * 9 + 3;
    this.x = Math.random() * ( this.canvas.getWidth() - this.r * 2 );
    if ( this.x > this.canvas.getWidth() - this.r * 2 ) { //hvis disken går udover x-aksen
      this.x = this.canvas.getWidth() - this.r * 2;
    }
    else if ( this.x < this.r * 2 ) {
      this.x = this.r * 2;
    }

    this.y = Math.random() * ( this.canvas.getHeight() - this.r * 2 )
    if ( this.y > this.canvas.getHeight() - this.r * 2 ) { //hvis disken går udover y-aksen
      this.y = this.canvas.getHeight() - this.r * 2;
    } else if ( this.y < this.r * 2 ) {
      this.y = this.r * 2;
    }


    this.color = color;
}

  draw() {
    this.canvas.getContext()
      .beginPath();
    this.canvas.getContext()
      .strokeStyle = '#222';
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
    if ( this.x + this.dx + this.r > this.canvas.getWidth() ||
      this.x + this.dx - this.r < 0 )
      this.dx = -this.dx;
    if ( this.y + this.dy + this.r > this.canvas.getHeight() ||
      this.y + this.dy - this.r < 0 )
      this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;
  }

  collisionDetect( arr ) {
    for ( let j = 0; j < arr.length; j++ ) {
      if ( !( this === arr[ j ] ) ) {

        const dx = this.x - arr[ j ].x;
        const dy = this.y - arr[ j ].y;
        const distance = Math.sqrt( dx * dx + dy * dy );

        if ( distance < this.r + arr[ j ].r ) {
          if ( this.r < arr[ j ].r ) {
            arr[ j ].r += this.r;
            this.r = 0;
          } else {
            this.r += arr[ j ].r;
            arr.splice( j, 1 );
          }
        }
      }
    }
}
};
