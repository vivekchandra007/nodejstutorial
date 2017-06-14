var fs = require("fs");

//use "prompt" external module to provide user with prompt for "write" [content to write] and "rename" [new file name] options
var prompt = require("prompt");

function read(file) {
    if (!fs.existsSync(file))
        console.log(file + " doesn't exists.");
    else {
        var contents = fs.readFileSync(file);
        console.log("Contents of file " + file + ": ");
        console.log(contents.toString());
    }
}

function write(file) {
    if (!fs.existsSync(file))
        console.log("Creating file " + file);
    else
        console.log('Writing to file' + file);

    prompt.start();
    prompt.get(['content_to_write'], function(err, result) {
        if (err)
            console.log(err);
        else if (result) {
            fs.writeFileSync(file, result.content_to_write);
            console.log("Written and saved");
        }
    });
}

function rename(file) {
    if (!fs.existsSync(file))
        console.log(file + " doesn't exists.");
    else {
        prompt.start();
        prompt.get(['new_file_name'], function(err, result) {
            if (err)
                console.log(err);
            else if (result) {
                fs.renameSync(file, result.new_file_name);
                console.log(file + " file renamed to " + result.new_file_name);
            }
        });
    }
}

//expose all these modules to be used by others
module.exports.read = read;
module.exports.write = write;
module.exports.rename = rename;