import {Image} from './image.js';

export class ImageGif extends Image {
    constructor(path) {
        if (!path.endsWith('.gif')) {
            throw new Error(`${path} is not a .gif image`);
        }
        super(path);
    }
}