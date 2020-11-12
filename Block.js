class Block {
    constructor(x,y,w,h){
        var options = {
           
            restitution :0.4,
            friction :0
            //isStatic:true
           
        }
            this.body= Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.body);
            this.w = w;
            this.h = h;
            this.visibility = 50;
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<5){
        push();
       
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
        }
        else{
             
            World.remove(world,this.body);
       
        }
    }
}