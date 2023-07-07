class DataSource {
    writeData(data) { }
    readData() { }
}

class FileDataSource extends DataSource {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    writeData(data) {
        console.log(`Write data to ${this.filename}`);
    }

    readData() {
        console.log(`Read data from ${this.filename}`);
    }
}

class DataSourceDecorator extends DataSource {
    constructor(wrappee) {
        super();
        this.wrappee = wrappee;
    }

    writeData(data) {
        this.wrappee.writeData(data);
    }

    readData() {
        this.wrappee.readData();
    }
}

class EncryptionDecorator extends DataSourceDecorator {
    writeData(data) {
        super.writeData(data);
        this.encrypt(data);
    }
}

class CompressionDecorator extends DataSourceDecorator {
    writeData(data) {
        super.writeData(data);
        this.compress(data);
    }
    readData() {
        super.readData();
        this.decompress(data);
    }
}

class Application {

    dumbUsageExample() {
        let source = new FileDataSource("somefile.dat");
        source.writeData("some data");

        source = new CompressionDecorator(source);
        source.writeData("some data");

        source = new EncryptionDecorator(source);
        source.writeData("some data");

    }
}

class SalaryManager {
    constructor(source) {
        this.source = source;
    }
    laod() {
        return this.source.readData();
    }
    save() {
        this.source.writeData();
    }
}

class ApplicationConfigurator {
    configure() {
        let source = new FileDataSource("somefile.dat");
        if (compressionEnabled) {
            source = new CompressionDecorator(source);
        }
        if (encryptionEnabled) {
            source = new EncryptionDecorator(source);

            const logger = new SalaryManager(source);
            logger.save();
        }
    }
}