class Chain{
    constructor(firstBody,secondBody){
       var options ={
           bodyA:firstBody,
           bodyB:secondBody,
           stiffness:1,
           length:100,
       } 
      this.chain = Constraint.create(options)
      World.add(world,this.chain)
      console.log(this.chain)
    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}