const canvas = document.getElementById("letterA");
const context = canvas.getContext("2d");

context.lineWidth = 5;
context.strokeStyle = "black";

context.moveTo(0, 150);
context.lineTo(150, 0);

context.lineTo(300, 150);

context.stroke();

context.moveTo(50, 150);
context.lineTo(150, 50);

context.lineTo(250, 150);

context.moveTo(100, 100);
context.lineTo(200, 100);

context.stroke();

const y = 150 - 1;     // 10px above bottom
const len = 50;                   // line length

context.beginPath();
context.moveTo(0, y);                 // start at left edge
context.lineTo(len, y);               // draw to the right
context.stroke();

context.beginPath();
context.moveTo(canvas.width - len, y);// start len px from right edge
context.lineTo(canvas.width, y);      // draw to the right edge
context.stroke();