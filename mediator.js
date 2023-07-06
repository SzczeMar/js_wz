class AuthenticationDialog {
    constructor() {
        this.title = "";
        this.loginOrRegisterChkBx = new Checkbox(this);
        this.loginUsername = new Textbox(this);
        this.loginPassword = new Textbox(this);
        this.registrationUsername = new Textbox(this);
        this.registrationPassword = new Textbox(this);
        this.registrationEmail = new Textbox(this);
        this.okBtn = new Button(this);
        this.cancelBtn = new Button(this);
    }

    notify(sender, event) {
        if (sender === this.loginOrRegisterChkBx && event === "check") {
            if (this.loginOrRegisterChkBx.checked) {
                this.title = "Log in";
                // Show login form components, hide registration form components.
            } else {
                this.title = "Register";
                // Show registration form components, hide login form components.
            }
        }

        if (sender === this.okBtn && event === "click") {
            if (this.loginOrRegisterChkBx.checked) {
                // Try to find user credentials.
                if (!found) {
                    // Show an error message above the username field.
                }
            } else {
                // Create an account, log the user in, etc.
            }
        }
    }
}

class Component {
    constructor(dialog) {
        this.dialog = dialog;
    }

    click() {
        this.dialog.notify(this, "click");
    }

    keypress() {
        this.dialog.notify(this, "keypress");
    }
}

class Button extends Component {
    // ...
}

class Textbox extends Component {
    // ...
}

class Checkbox extends Component {
    constructor(dialog) {
        super(dialog);
        this.checked = false;
    }

    check() {
        this.checked = !this.checked;
        this.dialog.notify(this, "check");
    }
}
