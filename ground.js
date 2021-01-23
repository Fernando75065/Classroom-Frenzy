class Ground {
constructor(x,y,width,height){
    
    this.body = Body.rectangle(x,y,width,height,{isStatic:true})
    this.width=width;
    this.height=height;
    World.add(world,this.body)

}
display(){
    rectMode(CENTER);
    fill("red");
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}