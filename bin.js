class Bin{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        };
        
        this.height = h;
        this.width = w;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
	}
    display(num){
		push();
        var pos = this.body.position;
		pop();
		
        fill("blue");
        if(num === 0){
		}
		else{
		image(d,(pos.x-this.width/2)+10,pos.y-this.height*10);
		}
    }
}
