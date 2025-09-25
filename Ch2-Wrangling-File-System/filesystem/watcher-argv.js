'use strict';

const fs = require('fs');
const filename = process.argv[2];
if(!filename) {
    throw Error('A filename must be specified!');
}

fs.watchFile(filename, () => console.log(`File ${filename} changed!`));
console.log(`Now Watching ${filename} for changes...`);