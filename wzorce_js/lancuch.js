class Component {
    constructor(){
        this.tooltipText = null;
        this.container = null;
    }

    showHelp(){
        if(this.tooltipText !== null){
            // show tooltip
        } else if(this.container !== null){
            this.container.showHelp();
        }
    }
}

class Container extends Component {
    constructor(){
        super();
        this.children = [];
    }

    addChild(child){
        this.children.push(child);
        child.container = this;
    }

    
    }
class Button extends Component {
    constructor(){
        super();
        this.icon = null;
        this.text = null;
    }
}

class Panel extends Container {
    constructor(){
        super();
        this.modalHelpText = null;
    }

    setModalHelpText(text){
        this.modalHelpText = text;
    }

    showHelp(){
        if(this.modalHelpText !== null){
            // show modal
        } else {
            super.showHelp();
        }
    }
}

class Dialog extends Container{
    constructor(){
        super();
        this.saveButton = new Button();
        this.cancelButton = new Button();
    }

    showHelp(){
        if (this.saveButton.tooltipText !== null){
            // show tooltip
        } else {
            super.showHelp();
        }
    }
}

class Application{
    createUI(){
        const dialog = new Dialog();
        dialog.modalHelpText = "This dialog box helps you...";
        dialog.addChild(new Button());
        dialog.addChild(new Button());
        dialog.addChild(new Button());
        dialog.addChild(new Button());
        dialog.showHelp();
    }
    OnF1KeyPress(){
        let component = this.getComponentAtMouseCoords();
        component.showHelp();
}
getComponentAtMouseCoords(){
    return new Button();
}
}