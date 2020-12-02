// 모듈 상단 변경해야함...

const Jimp = require('jimp');

const sizeList = [16];
const err = new Error('Please give me an png image of 256x256 pixels.');
err.code = 'ESIZE';

module.exports = function (filepath) {
    if (Array.isArray(filepath)) {
        return Promise.all(filepath.map((file) => Jimp.read(file))).then(imagesToIco);
    }

    return Jimp.read(filepath)
        .then((image) => {
            const bitmap = image.bitmap;
            const size = bitmap.width;
            if (image._originalMime !== Jimp.MIME_PNG || size !== bitmap.height) {
                throw err;
            }
            // if (size !== 256) {
            // 	image.resize(256, 256, Jimp.RESIZE_BICUBIC);
            // }

            const resizedImages = sizeList.map((targetSize) => image.clone().resize(targetSize, targetSize, targetSize));

            return Promise.all(resizedImages.concat(image));
        })
        .then(imagesToIco);
};
