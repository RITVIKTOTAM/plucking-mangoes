class Chain {

    constructor(bodyA,pointB){
      
      
      var options = {
          stiffness : 1,
          'bodyA' : bodyA,
          'pointB' : pointB,
          'length' : 8,
                  
        
      }
     
     this.link = Constraint.create(options)
     World.add(world,this.link)    
     
 
    }
 
   display(){
     
    

      
      if(this.link.bodyA){
        var pointA = this.link.bodyA.position;
        var pointB = this.link.pointB;
        push()
        strokeWeight  (9);
        line(pointA.x-70,pointA.y-50,pointB.x,pointB.y);
        pop()   
      }
       

         
 
   }
 
 }