class Dialog {
    createButton() {
        throw new Error('You have to implement the method createButton!');
    }

    render() {
        let okButton = this.createButton();
        okButton.onClick(this.closeDialog);
        okButton.render();
    }

    closeDialog() {
        console.log('Dialog was closed');
    }
}

class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}

class WebDialog extends Dialog {
    createButton() {
        return new HTMLButton();
    }
}

class Button {
    render() {
        throw new Error('You have to implement the method render!');
    }

    onClick(f) {
        throw new Error('You have to implement the method onClick!');
    }
}

class WindowsButton extends Button {
    render() {
        console.log('Render WindowsButton');
    }

    onClick(f) {
        console.log('WindowsButton was clicked');
        f();
    }
}

class HTMLButton extends Button {
    render() {
        console.log('Render HTMLButton');
    }

    onClick(f) {
        console.log('HTMLButton was clicked');
        f();
    }
}

class Application {
    initalize() {
        let config = 'Windows';
        if (config === 'Windows') {
            this.dialog = new WindowsDialog();
        } else if (config === 'Web') {
            this.dialog = new WebDialog();
        } else {
            throw new Error('Error! Unknown operating system.');
        }
    }

    main() {
        this.initalize();
        this.dialog.render();
    }
}
let app = new Application();
app.main();
