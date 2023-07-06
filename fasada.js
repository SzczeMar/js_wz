class VideoFile {
    constructor(name) {
        this.name = name;
    }

    save() {
        console.log(`Saving video ${this.name}...`);
    }
}

class OggCompressionCodec {
    compress(videoFile) {
        console.log(`Compressing video ${videoFile.name} in Ogg format`);
    }
}

class MPEG4CompressionCodec {
    compress(videoFile) {
        console.log(`Compressing video ${videoFile.name} in MPEG4 format`);
    }
}

class CodecFactory {
    static extract(file) {
        const type = file.name.split('.').pop();
        switch (type) {
            case 'mp4':
                return new MPEG4CompressionCodec();
            case 'ogg':
                return new OggCompressionCodec();
        }
    }
}
class BitrateReader {
    static read(videoFile, codec) {
        console.log(`Reading video ${videoFile.name} with ${codec.constructor.name} codec`);
    }

    static convert(buffer, codec) {
        console.log(`Converting video buffer with ${codec.constructor.name} codec`);
    }
}

class AudioMixer {
    static fix(buffer) {
        console.log(`Fixing audio...`);
    }
}

class VideoConverter{
    convert(fileName, format){
        const file = new VideoFile(fileName);
        const sourceCodec = CodecFactory.extract(file);
        const destinationCodec = format === 'mp4' ? new MPEG4CompressionCodec() : new OggCompressionCodec();
        const buffer = BitrateReader.read(file, sourceCodec);
        const intermediateResult = BitrateReader.convert(buffer, destinationCodec);
        // const result = (new AudioMixer()).fix(intermediateResult);
        file.save();
    }
}

class Application {
    main(fileName, format) {
        const converter = new VideoConverter();
        converter.convert(fileName, format);
    }
}

const app = new Application();
app.main('funny-cats-video.ogg', 'mp4');