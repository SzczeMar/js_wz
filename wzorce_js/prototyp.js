class Shape {
    constructor(source){
        if(source){
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }
    }
    clone(){
        throw new Error("Abstract method!");
    }
}

class Circle extends Shape {
    constructor(source){
        super(source);
        if(source){
            this.radius = source.radius;
        }
    }
    clone(){
        return new Circle(this);
    }
}

class Rectangle extends Shape {
    constructor(source){
        super(source);
        if(source){
            this.width = source.width;
            this.height = source.height;
        }
    }
    clone(){
        return new Rectangle(this);
    }
}

class Application {
    constructor(){
        this.shapes = [];
        let circle = new Circle();
        circle.x = 10;
        circle.y = 10;
        circle.radius = 20;
        circle.color = "red";
        this.shapes.push(circle);

        let anotherCircle = circle.clone();
        this.shapes.push(anotherCircle);

        let rectangle = new Rectangle();
        rectangle.width = 10;
        rectangle.height = 20;
        rectangle.color = "blue";
        this.shapes.push(rectangle);
}
    businessLogic(){
        let shapesCopy = [];

        for(let shape of this.shapes){
            shapesCopy.push(shape.clone());
        }
    }

}
let app = new Application();
app.businessLogic();
