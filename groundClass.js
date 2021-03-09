class Ground {
    constructor(x,y,width,height, ) {
      var options = {
          isStatic: true,
       /*   'restitution':0.1,
          'friction':0.8,
          'density':3.0*/
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     // Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle=this.body.angle
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height, );
    }
  };