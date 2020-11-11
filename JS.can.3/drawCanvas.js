'use strict';
import {$} from '../nQuery.js';
import {Shape} from './Shape.js';



function drawCanvas(height, width){
    debugger;
    let canvas = $('canvas1');
    let ctx = canvas.getContext("2d");

    height = $('height').value;
    width = $('width').value; 

    canvas.width = width; 
    canvas.height = height; 

}

let hittest = function (ev) {
    for (let shape of shapes) {
        let cx = shape.ctx;
        cx.beginPath();
        cx.rect(shape.x, shape.y, shape.width, shape.height);
        cx.closePath();
        let bb = this.getBoundingClientRect();    // canvas size and pos
        // mouse to canvas coordinates
        let x = (ev.clientX - bb.left) * (this.width / bb.width);
        let y = (ev.clientY - bb.top) * (this.height / bb.height);
        if (cx.isPointInPath(x, y)) {
            cx.fillStyle = (cx.fillStyle === "#ffff00") ? "green" : "yellow";
            cx.fill();
            shape.color = cx.fillStyle;
            // window.alert("hit: "+x+","+y);
        } else {
            // window.alert("nohit: "+x+","+y);
        }
        // console.log(shape);
    }
}


export {drawCanvas, hittest}; 

