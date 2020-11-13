'use strict';

import {$} from '../nQuery.js';
import {  Canvas} from '../JS.Anim.shared/Canvas.js';
import { Circle, Rect} from './Umo2.js';
import {  getRandomColor} from '../JS.Anim.shared/createColor.js';

let canvas = new Canvas( 'canvasDisk', 'transparent' );
let context = canvas.getContext( '2d' );
let umos = [];
let disk;
let noOfDisk = 5;

const createUmos = function (object) {
  for ( let i = 0; i < noOfDisk; i++ ) {
    disk = new object( canvas, getRandomColor() );
    umos.push( disk );
  }
}

createUmos(Rect);
createUmos(Circle);
console.log(umos);

const redraw = function () {
  canvas.clear();
  canvas.prep();

  for ( disk of umos ) {
    //WARNING DONT USE WHILE LOOP!!!!
  /*  if ( umos.length != 1 ) { //hvis der kun er tilbage, så stopper den
      disk.move();
      //disk.collisionDetect( umos );
    }*/
    disk.move()
    disk.draw();
  }

}

const repeater = function () {
  setInterval( redraw, 10 );
}

repeater();
