'use strict';

import {$} from '../nQuery.js';
import {Canvas} from '../JS.Anim.shared/Canvas.js';
import {Disk} from './Disk.js';

let canvas = new Canvas('canvasEllip', 'transparent');
let context = canvas.getContext('2d');

let disk = new Disk(canvas, 50, 50, 30, 'blue');
disk.draw();
disk.move();

const redraw = function(){
    canvas.clear();
    canvas.prep();
    disk.move();
    disk.draw();
}


const repeater = function () {
    setInterval(redraw, 10);
}

repeater();
