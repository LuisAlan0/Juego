class BoxM{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        mon1.velocityX = 2
        mon2.velocityX = 2
        rectMode(CENTER)
        fill("brown");
        rect(this.x, this.y, this.width, this.height)
    }
}