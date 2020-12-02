const fs = require('fs');
const pngToIco = require('png-to-ico');
const sizeOf = require('buffer-image-size');
const path = './input';

const src = fs
    .readdirSync(path)
    .filter((file) => /\.png/.test(file))
    .map((files) => `${path}/${files}`);

    for (let i = 0; i < src.length; i++) {
        pngToIco(src[i])
            .then((buf) => {
                fs.writeFileSync(`./output/favicon_${sizeOf(buf).images[1].width}.ico`, buf);
            })
            .catch(console.error);
    }
