class Iron{
	constructor(x,y,width,height)
	{ 
		var options = {
			'restitution':0.8,
			'friction':3,
			'density':30,

		  };
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
       this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);
		
		

	}
	display()
	{
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			fill("green");
		    
            rect(0,0,this.width,this.height)
            rectMode(Object)
			pop()
	}

}