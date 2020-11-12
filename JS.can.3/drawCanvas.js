'use strict';
import {$} from '../nQuery.js';

let canvas1 = $('canvas1');
let ctxNew = canvas1.getContext("2d");

function drawCanvas(height, width){
    
    height = $('height').value;
    width = $('width').value; 

    canvas1.width = width; 
    canvas1.height = height; 

}

let hittest = function (ev) {
    for (let shape of shapes) {
        let cx = shape.ctx;
        cx.beginPath();
        cx.arc(shape.x, shape.y, shape.r, shape.startangle, shape.endangle, shape.dir);
        cx.rect(shape.x, shape.y, shape.width, shape.height);
        
        cx.closePath();
        let bb = this.getBoundingClientRect();    // canvas size and pos
        // mouse to canvas coordinates
        let x = (ev.clientX - bb.left) * (this.width / bb.width);
        let y = (ev.clientY - bb.top) * (this.height / bb.height);
        if (cx.isPointInPath(x, y)) { 
            shape.ctx = ctxNew; 
            shape.draw(); 
            // window.alert("hit: "+x+","+y);
        } else {
            // window.alert("nohit: "+x+","+y);
        }
        console.log(shape);
    }
}

let shapes = []; 

export {drawCanvas, hittest, shapes}; 

