var x = prompt('Please, enter x:');

let g =0;

if (x<4) {
    g=Math.tan(x)-Math.pow(x,2);
} else if (x==4) {
    g=35*Math.PI;
} else {
    g=Math.log(x)+3;
}

document.write(`g = ` +g);