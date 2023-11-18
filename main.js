let lineColor = "#000000"
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function main() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let x = 0; x <= canvas.width; x += 100) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = lineColor;
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(x, canvas.height);
        context.lineTo(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = lineColor;
        context.stroke();
        context.closePath();
    }

    for (let y = 0; y <= canvas.height; y += 100) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = lineColor;
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(canvas.width, y);
        context.lineTo(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = lineColor;
        context.stroke();
        context.closePath();
    }
}

main();

window.addEventListener("resize", main);