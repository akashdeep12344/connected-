class connector{

constructor(bodyA,bodyB){

var option={

bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:10



}
this.sling=Constraint.create(option);
World.add(world,this.sling);
}

display(){

var pointA=this.sling.bodyA.position
var pointB=this.sling.bodyB.position

strokeWeight(2);

line(pointA.x,pointA.y,pointB.x,pointB.y); 


}


}








