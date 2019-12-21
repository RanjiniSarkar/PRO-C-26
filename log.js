class Log {
    constructor(x, y,height,angle) {
      var options={
        isStatic:true

      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
   Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(keyIsDown(LEFT_ARROW) && angle > -1.5708){
        angle -=0.05
        Matter.Body.setAngle( this.body, angle);
      }
      if(keyIsDown(RIGHT_ARROW) && angle < 0){
        angle +=0.05
        Matter.Body.setAngle( this.body, angle);
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("brown")
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
  
    }
   
  };