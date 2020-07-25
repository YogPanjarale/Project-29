class polygon {
    constructor(x,y) {
        var options = {
            isStatic: false
        }
      this.body = Bodies.circle(50,200,20,options)
      World.add(world, this.body);
      this.image = loadImage("polygon.png")
     // this.x= x
      //this.y =y
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("yellow");
      polyshape()
     // image(this.image,pos.x, pos.y, this.width, this.height)
    }
  };


