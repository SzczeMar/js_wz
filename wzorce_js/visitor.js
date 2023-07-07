class Shape {
    accept(visitor) {
        throw new Error('You have to implement the method accept!');
    }
}

class Dot extends Shape {
    accept(visitor) {
        visitor.visitDot(this);
    }
}

class Circle extends Shape {
    accept(visitor) {
        visitor.visitCircle(this);
    }
}

class Rectangle extends Shape {
    accept(visitor) {
        visitor.visitRectangle(this);
    }
}

class CompoundShape extends Shape {
    accept(visitor) {
        visitor.visitCompoundShape(this);
    }
}

class Visitor {
    visitDot(dot) {
        throw new Error('You have to implement the method visitDot!');
    }

    visitCircle(circle) {
        throw new Error('You have to implement the method visitCircle!');
    }

    visitRectangle(rectangle) {
        throw new Error('You have to implement the method visitRectangle!');
    }

    visitCompoundShape(compoundShape) {
        throw new Error('You have to implement the method visitCompoundShape!');
    }
}

class XMLExportVisitor extends Visitor {
    visitDot(dot) {
        // Eksportuj ID i współrzędne środka kropki.
    }

    visitCircle(circle) {
        // Eksportuj ID okręgu, współrzędne środka i promień.
    }

    visitRectangle(rectangle) {
        // Eksportuj ID prostokąta, współrzędne lewego górnego
        // wierzchołka, szerokość i wysokość.
    }

    visitCompoundShape(compoundShape) {
        // Eksportuj ID figury oraz listę ID składających się na
        // nią.
    }
}

class Application {
    constructor() {
        this.allShapes = [];
    }

    export() {
        const exportVisitor = new XMLExportVisitor();
        
        for (const shape of this.allShapes) {
            shape.accept(exportVisitor);
        }
    }
}
