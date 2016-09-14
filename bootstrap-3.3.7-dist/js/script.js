/**************Alert() Method****************/

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}



/**************Circle Progres bar****************/
 
var ctx = document.getElementById('myCanvas').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;
var diff;
function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 10;
    ctx.fillStyle = '#09F';
    ctx.strokeStyle = '#09F';
    ctx.textAlign = 'center';
    ctx.fillText(al + '%', cw * .5, ch * .5 + 2, cw);
    ctx.beginPath();
    ctx.arc(90, 90, 60, start, diff / 10 + start, false);
    ctx.stroke();
    if (al >= 100) {
        clearTimeout(sim);
        //Add message to the user when it' complete
    }
    al++;
}
var sim = setInterval(progressSim, 50);



var ctx2 = document.getElementById('myCanvas2').getContext('2d');
var al2 = 0;
var start2 = 4.72;
var cw2 = ctx2.canvas.width;
var ch2 = ctx2.canvas.height;
var diff2;
function progressSim2() {
    diff2 = ((al2 / 100) * Math.PI * 2 * 10).toFixed(2);
    ctx2.clearRect(0, 0, cw2, ch2);
    ctx2.lineWidth = 10;
    ctx2.fillStyle = '#09F';
    ctx2.strokeStyle = '#09F';
    ctx2.textAlign = 'right';
    ctx2.fillText(al2 + '%', cw2 * .5, ch2 * .5 + 2, cw2);
    ctx2.beginPath();
    ctx2.arc(90, 90, 60, start2, diff2 / 10 + start2, false);
    ctx2.stroke();
    if (al2 >= 100) {
        clearTimeout(sim2);
        //Add message to the user when it' complete
    }
    al2++;
}
var sim2 = setInterval(progressSim2, 50);


var ctx3 = document.getElementById('myCanvas3').getContext('2d');
var al3 = 0;
var start3 = 4.72;
var cw3 = ctx3.canvas.width;
var ch3 = ctx3.canvas.height;
var diff3;
function progressSim3() {
    diff3 = ((al3 / 100) * Math.PI * 2 * 10).toFixed(2);
    ctx3.clearRect(0, 0, cw2, ch2);
    ctx3.lineWidth = 10;
    ctx3.fillStyle = '#09F';
    ctx3.strokeStyle = '#09F';
    ctx3.textAlign = 'right';
    ctx3.fillText(al3 + '%', cw3 * .5, ch3 * .5 + 2, cw3);
    ctx3.beginPath();
    ctx3.arc(90, 90, 60, start2, diff2 / 10 + start2, false);
    ctx3.stroke();
    if (al3 >= 100) {
        clearTimeout(sim3);
        //Add message to the user when it' complete
    }
    al3++;
}
var sim3 = setInterval(progressSim3, 50);


var ctx4 = document.getElementById('myCanvas4').getContext('2d');
var al4 = 0;
var start4 = 4.72;
var cw4 = ctx4.canvas.width;
var ch4 = ctx4.canvas.height;
var diff4;
function progressSim4() {
    diff4 = ((al4 / 100) * Math.PI * 2 * 10).toFixed(2);
    ctx4.clearRect(0, 0, cw4, ch4);
    ctx4.lineWidth = 10;
    ctx4.fillStyle = '#09F';
    ctx4.strokeStyle = '#09F';
    ctx4.textAlign = 'right';
    ctx4.fillText(al4 + '%', cw4 * .5, ch4 * .5 + 2, cw4);
    ctx4.beginPath();
    ctx4.arc(90, 90, 60, start, diff4 / 10 + start, false);
    ctx4.stroke();
    if (al4 >= 100) {
        clearTimeout(sim4);
        //Add message to the user when it' complete
    }
    al4++;
}
var sim4 = setInterval(progressSim4, 50);

