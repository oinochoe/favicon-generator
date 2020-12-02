const fs = require('fs');
const pngToIco = require('png-to-ico');
const path = './input';
let array = [];

const src = fs
    .readdirSync(path)
    .filter((file) => /\.png/.test(file))
    .map((files) => `${path}/${files}`);

function readFiles() {
    for (let i = 0; i < src.length; i++) {
        array.push(src[i]);
    }
    return new Promise(function (resolve, reject) {
        resolve(array);
    });
}

// after read files
readFiles().then(function (resolveData) {
    pngToIco(resolveData)
        .then((buf) => {
            fs.writeFileSync('./output/favicon.ico', buf);
        })
        .catch(console.error);
});
