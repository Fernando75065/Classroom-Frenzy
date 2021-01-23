
class Ball {
    constructor(x,y,width,height){
        
        this.body = Body.rectangle(x,y,width,height,{frictionAir:0.005,density:0.04,isStatic:true})
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        fill("green");
        tint(255,0)
        ellipse(0,0,this.width,this.height)
        pop();
    }
    }