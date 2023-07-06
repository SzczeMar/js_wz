class Car {
    // properties for car
}

class Manual {
    // properties for manual
}

class Builder {
    reset() {
        throw new Error("Abstract method!");
    }
    setSeats(num) {
        throw new Error("Abstract method!");
    }
    setEngine(engine) {
        throw new Error("Abstract method!");
    }
    setTripComputer(computer) {
        throw new Error("Abstract method!");
    }
    setGPS(gps) {
        throw new Error("Abstract method!");
    }
    getProduct() {
        throw new Error("Abstract method!");
    }
}

class CarBuilder extends Builder {
    constructor() {
        super();
        this.reset();
    }
    
    reset() {
        this.car = new Car();
    }

    setSeats(num) {
        // set number of seats in the car
    }

    setEngine(engine) {
        // install given engine
    }

    setTripComputer(computer) {
        // install trip computer
    }

    setGPS(gps) {
        // install GPS
    }

    getProduct() {
        let product = this.car;
        this.reset();
        return product;
    }
}

class CarManualBuilder extends Builder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.manual = new Manual();
    }

    setSeats(num) {
        // document seat specs
    }

    setEngine(engine) {
        // add engine instructions
    }

    setTripComputer(computer) {
        // add trip computer instructions
    }

    setGPS(gps) {
        // add GPS instructions
    }

    getProduct() {
        let product = this.manual;
        this.reset();
        return product;
    }
}

class Director {
    constructSportsCar(builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine("SportEngine");
        builder.setTripComputer(true);
        builder.setGPS(true);
    }

    constructSUV(builder) {
        // ...
    }
}

class Application {
    makeCar() {
        let director = new Director();
        
        let carBuilder = new CarBuilder();
        director.constructSportsCar(carBuilder);
        let car = carBuilder.getProduct();
        
        let manualBuilder = new CarManualBuilder();
        director.constructSportsCar(manualBuilder);
        let manual = manualBuilder.getProduct();

        // work with the car and manual...
    }
}

let app = new Application();
app.makeCar();
console.log("Done!");
