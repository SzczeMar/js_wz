let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();

let swim = {
    setSwim: function() {
        console.log("I can swim");
}
};

let fly = {
    setFly: function() {
        console.log("I can fly");
}
};

let duck = Object.assign({}, swim, fly);

duck.setSwim();
duck.setFly();