class Paper { 
constructor(x,y){
var options = {
isStatic : false,
restitution :0.3,
friction: 0.5,
density:1.2
}

this.body= Bodies.circle(200,100,20,options)
World.add(world.this.body);
}

display(){
var pos = this.body.position
var angle = this.body.angle;
  
push();
translate(pos.x, pos.y);
rotate(angle);
strokeWeight(3);
stroke('blue')
fill('yellow')
rectMode(CENTER)
rect(0, 0, this.width, this.height);
pop();
}






}