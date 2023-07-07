class TreeType{
    constructor(name, color, texture){
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    draw(canvas, x, y){
        // draw the tree type
    }
}

class TreeFactory{  
    static treeTypes = new Map();
    static getTreeType(name, color, texture){
        let typeKey = '${name}_${color}_${texture}';
        if (!this.treeTypes.has(typeKey)){
            this.treeTypes.set(typeKey, new TreeType(name, color, texture));
        }
        return this.treeTypes.get(typeKey);
}
}
class Tree{
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw(canvas){
        this.type.draw(canvas, this.x, this.y);
    }
}

class Forest{
    constructor(){
        this.trees = [];
    }
    plantTree(x, y, name, color, texture){
        let type = TreeFactory.getTreeType(name, color, texture);
        let tree = new Tree(x, y, type);
        this.trees.push(tree);
    }
    draw(canvas){
        for (let tree of this.trees){
            tree.draw(canvas);
        }
    }
}