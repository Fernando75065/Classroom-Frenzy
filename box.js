class Box {
    constructor(x,y,width,height){
        
        this.body = Body.rectangle(x,y,width,height,{restitution:0.8,friction:1.0,density:0.04})
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height)
        pop();
    }
    }