// Interfejsy są symulowane przez tworzenie klas z metodami, które mogą być nadpisane
class GUIFactory {
    createButton() {
        throw new Error("This method must be overwritten!");
    }
    createCheckbox() {
        throw new Error("This method must be overwritten!");
    }
}

class WinFactory extends GUIFactory {
    createButton() {
        return new WinButton();
    }
    createCheckbox() {
        return new WinCheckbox();
    }
}

class MacFactory extends GUIFactory {
    createButton() {
        return new MacButton();
    }
    createCheckbox() {
        return new MacCheckbox();
    }
}

class Button {
    paint() {
        throw new Error("This method must be overwritten!");
    }
}

class WinButton extends Button {
    paint() {
        console.log("Render a button in Windows style.");
    }
}

class MacButton extends Button {
    paint() {
        console.log("Render a button in macOS style.");
    }
}

class Checkbox {
    paint() {
        throw new Error("This method must be overwritten!");
    }
}

class WinCheckbox extends Checkbox {
    paint() {
        console.log("Render a checkbox in Windows style.");
    }
}

class MacCheckbox extends Checkbox {
    paint() {
        console.log
    }
}

class Application {
    constructor(factory) {
        this.factory = factory;
    }
    createUI() {
        this.button = this.factory.createButton();
    }
    paint() {
        this.button.paint();
    }
}

class ApplicationConfigurator {
    main() {
        let config = "Windows"; // or "Mac"
        let factory;

        if (config === "Windows") {
            factory = new WinFactory();
        } else if (config === "Mac") {
            factory = new MacFactory();
        } else {
            throw new Error("Error! Unknown operating system.");
        }

        let app = new Application(factory);
        app.createUI();
        app.paint();
    }
}

let configurator = new ApplicationConfigurator();
configurator.main();