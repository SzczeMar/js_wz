class Command {
    constructor(app, editor) {
        this.app = app;
        this.editor = editor;
        this.backup = "";
    }

    saveBackup() {
        this.backup = this.editor.text;
    }

    undo() {
        this.editor.text = this.backup;
    }

    execute() {
        throw new Error('execute method is not implemented');
    }
}

class CopyCommand extends Command {
    execute() {
        this.app.clipboard = this.editor.getSelection();
        return false;
    }
}

class CutCommand extends Command {
    execute() {
        this.saveBackup();
        this.app.clipboard = this.editor.getSelection();
        this.editor.deleteSelection();
        return true;
    }
}

class PasteCommand extends Command {
    execute() {
        this.saveBackup();
        this.editor.replaceSelection(this.app.clipboard);
        return true;
    }
}

class UndoCommand extends Command {
    execute() {
        this.app.undo();
        return false;
    }
}

class CommandHistory {
    constructor() {
        this.history = [];
    }

    push(command) {
        this.history.push(command);
    }

    pop() {
        return this.history.pop();
    }
}

class Editor {
    constructor() {
        this.text = "";
    }

    getSelection() {
        // Return selected text.
    }

    deleteSelection() {
        // Delete selected text.
    }

    replaceSelection(text) {
        // Insert clipboard content at current position.
    }
}

class Application {
    constructor() {
        this.clipboard = "";
        this.editors = [];
        this.activeEditor = null;
        this.history = new CommandHistory();
    }

    createUI() {
        // Assign commands to UI objects.

        let copy = () => {
            this.executeCommand(new CopyCommand(this, this.activeEditor));
        };
        // copyButton.setCommand(copy);
        // shortcuts.onKeyPress("Ctrl+C", copy);

        let cut = () => {
            this.executeCommand(new CutCommand(this, this.activeEditor));
        };
        // cutButton.setCommand(cut);
        // shortcuts.onKeyPress("Ctrl+X", cut);

        let paste = () => {
            this.executeCommand(new PasteCommand(this, this.activeEditor));
        };
        // pasteButton.setCommand(paste);
        // shortcuts.onKeyPress("Ctrl+V", paste);

        let undo = () => {
            this.executeCommand(new UndoCommand(this, this.activeEditor));
        };
        // undoButton.setCommand(undo);
        // shortcuts.onKeyPress("Ctrl+Z", undo);
    }

    executeCommand(command) {
        if (command.execute()) {
            this.history.push(command);
        }
    }

    undo() {
        let command = this.history.pop();
        if (command !== null) {
            command.undo();
        }
    }
}
