class Pared{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        rectMode(CENTER)
        fill("green");
        rect(this.x, this.y, this.width, this.height)
    }
}