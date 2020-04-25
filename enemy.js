class enemy{

    constructor(x,y){
    
        var options={
    restitution:1,
    friction:1
        }
    
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }
    display(){
    push ();
    if(this.body.speed>3){
       // this.body.display();
        translate(this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        rect(0,0,this.body.width,this.body.height);

    }
    else{
        World.remove(world.this.body);
    }
    
    pop ();
    }
    }