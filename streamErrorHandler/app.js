const fs = require('fs'),
    stream = fs.createReadStream('not-found');

stream.on('error' , (err)=>{
    console.trace();
    console.log('Stack:' , err.stack);
    console.log('The error raised was:' , err);
})