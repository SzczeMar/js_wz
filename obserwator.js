class EventManager {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventType, listener) {
        if(!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    }

    unsubscribe(eventType, listener) {
        this.listeners[eventType] = this.listeners[eventType].filter(l => l !== listener);
    }

    notify(eventType, data) {
        if(this.listeners[eventType]) {
            this.listeners[eventType].forEach(listener => listener.update(data));
        }
    }
}

class Editor {
    constructor() {
        this.events = new EventManager();
        this.file = null;
    }

    openFile(path) {
        this.file = path; // Simplifying for the example
        this.events.notify("open", this.file);
    }

    saveFile() {
        // ... logic to save file
        this.events.notify("save", this.file);
    }
}

class LoggingListener {
    constructor(log_filename, message) {
        this.log = log_filename; // Simplifying for the example
        this.message = message;
    }

    update(filename) {
        console.log(this.message.replace('%s', filename));
    }
}

class EmailAlertsListener {
    constructor(email, message) {
        this.email = email;
        this.message = message;
    }

    update(filename) {
        console.log(`Email to ${this.email}: ${this.message.replace('%s', filename)}`);
    }
}

class Application {
    config() {
        this.editor = new Editor();

        this.logger = new LoggingListener(
            "/path/to/log.txt",
            "Someone has opened the file: %s"
        );
        this.editor.events.subscribe("open", this.logger);

        this.emailAlerts = new EmailAlertsListener(
            "admin@example.com",
            "Someone has changed the file: %s"
        );
        this.editor.events.subscribe("save", this.emailAlerts);
    }
}
