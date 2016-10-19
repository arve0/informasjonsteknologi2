
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.translate(0.5, 0.5);

ctx.lineWidth = 1;

var size = 20;
var amount = canvas.width / 20;
var state = {};

reset();  // draw lines

var drawed = {};  // store where we already have drawed
function draw (x, y) {
    x = Math.floor(x);
    y = Math.floor(y);

    var coordinate = x + ',' + y;
    
    if (localStorage.getItem(coordinate)) {
        ctx.clearRect(x * size, y * size, size, size);
        localStorage.removeItem(coordinate);
    } else {
        ctx.fillRect(x * size, y * size, size, size);
        localStorage.setItem(coordinate, '1');
    }
}

canvas.onclick = function (event) {
    var x = event.offsetX / size;
    var y = event.offsetY / size;

    draw(x, y);
    event.stopPropagation();
}

document.body.onclick = function (event) {
    reset();
}

function reset () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw lines
    for (var i = 0; i < amount; i += 1) {
        ctx.moveTo(i * 20, 0);
        ctx.lineTo(i * 20, canvas.height);
        ctx.moveTo(0, i * 20);
        ctx.lineTo(canvas.width, i * 20);
    }
    ctx.stroke();
}

/* Plan

På klikk:
- Sjekk om true i state?
- Hvis ja: tegn hvit firkant, fjern fra state.
- Hvis nei: tegn svart firkant, lagre true til state.

*/

