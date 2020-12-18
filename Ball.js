class Ball{
    constructor(x,y){
        var options = {
            restitution : 0.5,
            friction : 1.0,
            density : 0.8,
            }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle

        
            

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('blue');
        fill('red');
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();


    }


}