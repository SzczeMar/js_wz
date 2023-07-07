import { ImageGif } from "./imageGif.js";
import { ImageJpeg } from "./imageJpeg.js";
import { ImagePng } from "./imagePng.js";

function createImage(name){
    if (name.match(/\.jpe?g$/)) {
        return new ImageJpeg(name);
    } else if (name.match(/\.png$/)) {
        return new ImagePng(name);
    } else if (name.match(/\.gif$/)) {
        return new ImageGif(name);
    } else {
        throw new Error(`${name} is not a supported format`);
    }
}

const image = createImage('photo.jpeg');
console.log(image);
const image2 = createImage('photo.gif');
console.log(image2);
const image3 = createImage('photo.png');
console.log(image3);
// const image4 = createImage('photo.bmp');
// console.log(image4);