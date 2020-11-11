'use strict';
import {$} from '../nQuery.js';

function drawCanvas(height, width){
    debugger;
    let canvas = $('canvas1');
    let ctx = canvas.getContext("2d");

    height = $('height').value;
    width = $('width').value; 

    canvas.width = width; 
    canvas.height = height; 

}

export {drawCanvas}; 

