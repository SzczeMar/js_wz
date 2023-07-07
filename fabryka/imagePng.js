import {Image} from './image.js';

export class ImagePng extends Image {
    constructor(path) {
        if (!path.endsWith('.png')) {
            throw new Error(`${path} is not a .png image`);
        }
        super(path);
    }
}