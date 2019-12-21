class Head{
    constructor(x,y){
    
        this.x=x;
        this.y=y;
        this.r=80;
        this.col=color(255);
    }

    changeColor(){
this.col= color(random(255),random(255),random(255));
    }

    display(){
      fill(this.col);
      ellipse(this.x,this.y,this.r*2,this.r*2)  
    }

    
}