class Graphic{
    move(x, y){}
    draw(){}
}

class Dot extends Graphic {
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }
    move(x, y){
        this.x += x;
        this.y += y;
    }
    draw(){}
}

class Circle extends Dot {
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }
    draw(){
        console.log(`Circle: ${this.x}, ${this.y}, ${this.radius}`);
    }
}

class CompoundGraphic extends Graphic {
    constructor(){
        super();
        this.children = [];
    }
    add(child){
        this.children.push(child);
    }
    remove(child){
        this.children = this.children.filter(c => c !== child);
    }
    move(x, y){
        this.children.forEach(child => child.move(x, y));
    }
    draw(){
        this.children.forEach(child => child.draw());
    }
}

class ImageEditor {
    constructor(){
        this.all = new CompoundGraphic();
    }

    load(){
        this.all.add(new Dot(1, 2));
        this.all.add(new Circle(5, 3, 10));
    }
    groupSelected(components){
        const group = new CompoundGraphic();
        components.forEach(c => group.add(c));
        this.all.add(group);
        this.all.draw();
    }
}