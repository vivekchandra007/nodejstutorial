var fs = require("fs");

function read(file) {
    fs.readFile(file, function(error, contents) {
        if (error)
            console.log('Unable to read this file.' + error);
        else if (contents) {
            console.log(contents);
        }
    });
}

module.exports.read = read;