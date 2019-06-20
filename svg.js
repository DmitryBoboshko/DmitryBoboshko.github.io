function draw() {
    var canvas = document.getElementById('flag');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // drawing code here
        ctx.fillStyle = 'rgb(20,85,130)';
        ctx.fillRect(110,50,80,50);
        ctx.fillStyle = 'rgb(200,160,30)';
        ctx.fillRect(110,67,80,16);
        ctx.fillStyle = 'rgb(200,160,30)';
        ctx.fillRect(130,50,16,50);
        ctx.fillStyle = 'rgb(200,30,30)';
        ctx.fillRect(135,50,6,50);
        ctx.fillStyle = 'rgb(200,30,30)';
        ctx.fillRect(110,72,80,6);
    } else {
        //canvas-unsupported here
    }
}