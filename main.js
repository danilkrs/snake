function startGame() {
    myGameArea.start();
    myGamePiece = new component(20, 20, green, 100, 50);
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.heigth = 500;
        this.canvas.width = 500;
        this.context = this.canvas.getContext("2d");
        document.body.interfaceBefore(this.canvas, document.body.childNodes[0]);
    }
};

function component(width, heigth, color, x, y){
    this.width = width;
    this.heigth = heigth;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRext(this.x, this.y, this.width, this.heigth);
} 