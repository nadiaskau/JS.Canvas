'use strict'; 
/*Source: https://stackoverflow.com/questions/1484506/random-color-generator*/ 

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export {getRandomColor};