class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

     // this.image = loadImage("sprites/wood1.png");
    }
    display(){
      var pos =this.body.position;
      push();
      strokeWeight(1);
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  