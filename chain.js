class chain{
constructor(A,B){
    var options = {
        bodyA: A,
        bodyB: B,
        length: 10,
        stiffness: 0.04
    }

   this.chain1 = Constraint.create(options);
   World.add(world,this.chain1);
}



display(){
    var pointA=this.chain1.bodyA.position;
    var pointB=this.chain1.bodyB.position;
    strokeWeight(3);
    line(pointA.x, pointA.y,pointB.x,pointB.y);

}



}
