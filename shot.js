class shot{

constructor(bodyA,pointB){

  var options={
bodyA:bodyA,
bodyB:pointB,
stiffness:0.05,
length:12,

  }  
  
this.shot=Constraint.create(options);
this.pointB=pointB;
World.add(world,this.sling);
}
fly (){
  this.shot.bodyA=null
}

display(){

line (this.shot.bodyA.position.x,this.shot.bodyA.position.y,this.pointB.x,this.pointB.y);


}

}