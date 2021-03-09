class Paper{
    constructor(x,y,width, height){
        var properties={
            'restitution':0.6,
            'friction':0.5,
            'density': 2
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
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}