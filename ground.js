class ground{
 constructor(x,y,width,height){
    var options = {
      isStatic: true  
        
        
    }
  
    this.ground1 = Bodies.rectangle(x,y,width,height ,options )
  this.width = width
  this.height = height
  World.add(world,this.ground1);
 }
  display(){
    var pos =this.ground1.position;
    rectMode(CENTER);
    fill("orange");
    rect(pos.x, pos.y, this.width, this.height);
    


  }
}