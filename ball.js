class Ball {
  constructor(x, y) {
    var options = {
      isStatic:false,
        'restitution':1.0,
        'friction':1,
        'density':0.7
    }
    this.body = Bodies.circle(x, y, 25, options);
    this.r = 25;
     
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("cyan");
    stroke("indigo")
    strokeWeight(2)
    ellipse(0, 0, this.r, this.r);
    pop();
  }
};








