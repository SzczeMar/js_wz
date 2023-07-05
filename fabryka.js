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

class ApplicationConfigurator {
    main() {
        // We're just mocking a config file here
        let config = { OS: "Windows" };

        let factory;
        if (config.OS === "Windows") {
            factory = new WinFactory();
        } else if (config.OS === "Mac") {
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