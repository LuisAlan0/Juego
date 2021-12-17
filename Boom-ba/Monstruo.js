class Monstruo{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        mon1.velocityX = 0
        mon2.velocityX = 0
        rectMode(CENTER)
        fill("blue");
        rect(this.x, this.y, this.width, this.height)
    }
}