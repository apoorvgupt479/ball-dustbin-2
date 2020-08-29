class Ball{
    constructor(x,y,rad){
        var options= {
            restitution: 0.4,
			density:3,
			friction:2
        }

        this.body = Bodies.circle(x,y,rad,options);
        this.radius = rad;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
		push();
		translate(pos.x,pos.y);
		rotate(angle);
        fill("yellow");
        image(b,0,0);
		pop();
		
    }
}
