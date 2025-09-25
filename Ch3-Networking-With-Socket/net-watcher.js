'use strict';

const fs = require('fs');
const net = require('http');
const filename = process.argv[2];

if (!filename) {
  throw Error('A file to watch must be specified!');
}

net.createServer(connection => {
    //Reporting.
    console.log('Subscriber connected.');
    connection.write('Now watching ' + filename + ' for changes...\n');

    //Watch for setup
    const watcher = fs.watch(filename,() => connection.write(`File changed: ${new Date()}\n`));
    
    //Cleanup
    connection.on('close',() => {
        console.log('Subscriber disconnected.');
        watcher.close();
    });
}).listen(60300,() => console.log('Listening for subscribers...'));