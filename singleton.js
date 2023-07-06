class Database {
    constructor() {
        if (Database.exists) {
            return Database.instance
        }

    this._data = [];
    Database.instance = this;
    Database.exists = true;
    return this;

}

static getInstance() {
    const instance = this;
    if (!Database.instance) {
        Database.instance = new Database();
    }
    return Database.instance;
}
query(sql) {
    return this._data.find(item => item.sql === sql);
}
}
class Application {
    main() {
        const db = Database.getInstance();
        db.query('SELECT ...');
        const db2 = Database.getInstance();
        db2.query('SELECT ...');
        console.log('Is this the same instance? ' + (db === db2));
    }
}

let app = new Application();
app.main();