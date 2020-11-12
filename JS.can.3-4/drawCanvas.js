'use strict';
import {$} from '../nQuery.js';
import {Canvas} from './Canvas.js';

let canvas1 = new Canvas('canvas1', 'transparent');
let ctxNew = canvas1.getContext("2d");

let chosenShape; 

function drawCanvas(height, width){
    
    height = $('height').value;
    width = $('width').value; 

    canvas1.canvas.width = width; 
    canvas1.canvas.height = height; 

}

let hittest = function (ev) { //Når vi klikker i vores toolbox til højre 
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
             debugger;
            chosenShape = shape;  //den ændrer sig på canvas! I arrayet shapes bliver de til canvas1 ved klik 

            // window.alert("hit: "+x+","+y);
        } else {
            // window.alert("nohit: "+x+","+y);
        }
        console.log(shape);
    
    }
}

let drawShape = function(ev2){ //Når vi klikker i det blanke canvas til venstre
    let bb2 = this.getBoundingClientRect();
    let x2 = (ev2.clientX - bb2.left) * (this.width / bb2.width);
    let y2 = (ev2.clientY - bb2.top) * (this.height / bb2.height);

    chosenShape.cv = canvas1;
    chosenShape.ctx = ctxNew;
    chosenShape.x = x2; 
    chosenShape.y = y2;  
    chosenShape.draw(); //den tegner figuren 
}

let shapes = []; 

export {drawCanvas, hittest, shapes, canvas1, drawShape}; 

