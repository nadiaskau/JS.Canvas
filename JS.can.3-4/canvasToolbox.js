'use strict';
import {$} from '../nQuery.js';
import {drawCanvas, hittest, shapes, canvas1, drawShape} from './drawCanvas.js';
import {Circle, Rect} from './Shape.js'; 
import {Canvas} from './Canvas.js'; 
/*
 * nmlCanvas0.js
 * function drawing a polygon
 */
 
let drawButton = $('draw'); 
let canvasToolbox = new Canvas('canvas2', 'transparent'); 

let shape1 = new Rect(canvasToolbox, 5, 10, 120, 40, 'blue');
shape1.draw(); 
shapes.push(shape1); 

let shape2 = new Rect(canvasToolbox, 200, 20, 40, 120, '#cc0'); 
shape2.draw(); 
shapes.push(shape2);

let shape3 = new Circle(canvasToolbox, 150, 150, 50, 0, Math.PI * 1, 'red', false);
shape3.draw(); 
shapes.push(shape3);

let shape4 = new Rect(canvasToolbox, 30, 200, 60, 60, 'pink'); 
shape4.draw(); 
shapes.push(shape4);

canvasToolbox.canvas.addEventListener('click', hittest);
canvas1.canvas.addEventListener('click', drawShape);
drawButton.addEventListener('click', drawCanvas);

export {canvasToolbox}; 