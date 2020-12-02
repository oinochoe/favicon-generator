# favicon-generator
favicon-generator


## favicon generator Usage
```
const fs = require('fs');
const pngToIco = require('png-to-ico');
const path = './input';

// name will be same..
pngToIco([
    `${path}/favicon16.png`,
    `${path}/favicon32.png`,
    `${path}/favicon48.png`,
    `${path}/favicon64.png`,
    `${path}/favicon114.png`,
    `${path}/favicon128.png`,
    `${path}/favicon256.png`,
]).then((buf) => {
    fs.writeFileSync('./output/favicon.ico', buf);
})
.catch(console.error);

```