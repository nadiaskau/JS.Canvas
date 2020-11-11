'use strict';
import {$} from '../nQuery.js';
import {drawCanvas} from './drawCanvas.js';
/*
 * nmlCanvas0.js
 * function drawing a polygon
 */

 
let drawButton = $('draw'); 

let threeShapes = function () {
    let canvas = $('canvas2');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "#088";         // fill color to 088
        ctx.fillRect(20, 10, 120, 40);  // fill rectangle


        ctx.beginPath();                // begin new path
        ctx.arc(150, 150, 50, 0, Math.PI * 1, true); //halvcirkel
        ctx.lineTo(200, 150);
                                        // describe arc
        ctx.strokeStyle = 'red';        // stroke color
        ctx.fillStyle = '#cc0';         // set fill color
        ctx.fill();                     // fill the path
        ctx.stroke();                   // draw circumference


        ctx.lineWidth = 2;              // stroke weight
        ctx.strokeStyle = 'blue';       // stroke color
        ctx.strokeRect(175, 175, 100, 40); // draw rectangle


        ctx.fillStyle = "purple"; 
        ctx.fillRect(40, 70, 50, 120); // draw rectangle

        ctx.fillStyle = "pink"; 
        ctx.fillRect(120, 230, 150, 30); // draw rectangle
        
    }
}

drawButton.addEventListener('click', drawCanvas);

window.addEventListener('load', threeShapes);