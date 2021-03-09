class Hammer{
    constructor(x,y,width, height){
        var properties={
            'restitution':0.5,
            'friction':1,
            'density':2
            
            
        }
        this.body = Bodies.rectangle(x,y,width,height,properties);
        this.width = width;
        this.x=x;
        this.y=y;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x, pos.y);
        pos.x=mouseX
        pos.y=mouseY
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}