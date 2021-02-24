class Drop {
    constructor(x,y,r) {
        var options = {
            restitution: 0.8,
            friction: 0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display() {
        fill('blue');
        circle(this.x,this.y,this.r*2);
        if(this.body.position.y>height) {
            Body.setPosition(this.body,{x: this.body.position.x, y: 0});
        }
    }
}