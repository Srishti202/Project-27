class SlingShot{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 150
      }
      this.pointB=pointB
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
  }

  display(){
      
     
      var pointA = this.chain.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(2);
      line(pointA.x, pointA.y -25 , pointB.x, pointB.y);
      }

  }
  
