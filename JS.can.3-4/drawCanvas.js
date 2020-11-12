'use strict';
import {$} from '../nQuery.js';
import {Canvas} from './Canvas.js';
import {canvasToolbox} from './canvasToolbox.js'; 

let canvas1 = new Canvas('canvas1', 'transparent');
let ctxNew = canvas1.getContext("2d");
let shapes = []; 
let chosenShape; 
let shape; 

function drawCanvas(height, width){
    
    height = $('height').value;
    width = $('width').value; 

    canvas1.canvas.width = width; 
    canvas1.canvas.height = height; 

}
/*
let getCanvasAndMouse = function(ev){
    debugger;
    let bb = this.getBoundingClientRect();    // canvas size and pos
    // mouse to canvas coordinates
    let x = (ev.clientX - bb.left) * (this.width / bb.width);
    let y = (ev.clientY - bb.top) * (this.height / bb.height);
}*/

let hittest = function (ev) { //Når vi klikker i vores toolbox til højre 
    console.clear();
    for (shape of shapes) {
        debugger; 
        /*
        Prøvede på at resette canvas - og det virker IKKE!!
        shape.ctx = canvasToolbox.context; //for at resette tilbage til canvas2
        shape.cv = canvasToolbox.canvas; //for at resette tilbage til canvas2
        let cx = canvasToolbox.context;*/
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
             
            chosenShape = shape;  

            // window.alert("hit: "+x+","+y);
        } else {
            // window.alert("nohit: "+x+","+y);
        }
        
        console.log(shape);
        
    }
}

let drawShape = function(ev){ //Når vi klikker i det blanke canvas til venstre
    let bb = this.getBoundingClientRect();
    let x = (ev.clientX - bb.left) * (this.width / bb.width);
    let y = (ev.clientY - bb.top) * (this.height / bb.height);
debugger;
    chosenShape.cv = canvas1; //her får den ændret shape til at være på canvas1 - det ødelægger det hele...
    chosenShape.ctx = ctxNew;
    chosenShape.x = x; 
    chosenShape.y = y;  
    chosenShape.draw(); //den tegner figuren 
    console.log(shapes);
 
}



export {drawCanvas, hittest, shapes, canvas1, drawShape}; 

