'use strict';

import {
  $
} from '../nQuery.js';
import {
  Canvas
} from '../JS.Anim.shared/Canvas.js';
import {
  Umo
} from '../JS.Anim.shared/Umo.js';
import {
  getRandomColor
} from '../JS.Anim.shared/createColor.js';

let canvas = new Canvas( 'canvasDisk', 'transparent' );
let context = canvas.getContext( '2d' );
let umos = [];
let disk;
let noOfDisk = 10;

const createUmos = function () {
  for ( let i = 0; i < noOfDisk; i++ ) {
    disk = new Umo( canvas, getRandomColor() );
    umos.push( disk );
  }
}

createUmos();

const redraw = function () {
  canvas.clear();
  canvas.prep();

  for ( disk of umos ) {
    disk.move();
    disk.draw();
    disk.collisionDetect( umos );
  }
  console.log( umos.length );
}

const repeater = function () {
  setInterval( redraw, 10 );
}

repeater();
