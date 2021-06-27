class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 100,
            stiffness : 0.2
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA =null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(32,32,32);
            strokeWeight(8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}