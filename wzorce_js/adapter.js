class RoundHole {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    fits(peg) {
        return this.getRadius() >= peg.getRadius();
    }
}

class RoundPeg {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }
}

class SquarePeg {
    constructor(width) {
        this.width = width;
    }

    getWidth() {
        return this.width;
    }
}

class SquarePegAdapter extends RoundPeg {
    constructor(squarePeg) {
        super();
        this.squarePeg = squarePeg;
    }

    getRadius() {
        return this.squarePeg.getWidth() * Math.sqrt(2) / 2;
    }
}

// Gdzieś w kodzie klienta.
let hole = new RoundHole(5);
let rpeg = new RoundPeg(5);
console.log(hole.fits(rpeg)); // prawda

let small_sqpeg = new SquarePeg(5);
let large_sqpeg = new SquarePeg(10);

let small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg);
let large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg);
console.log(hole.fits(small_sqpeg_adapter)); // prawda
console.log(hole.fits(large_sqpeg_adapter)); // fałsz
