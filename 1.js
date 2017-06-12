var args = require('minimist')(process.argv.slice(2), { string: "name" });
var two = require('./2.js');

if (args.help || (!args.name && !args.file)) {
    printHelp();
    process.exit(1);
} else if (args.name) {
    var name = args.name;
    console.log('Hello ' + name);
} else if (args.file) {
    //var contents = fs.readFileSync(args.file);
    //console.log(contents.toString());
    two.read(args.file);
}

function printHelp() {
    console.log('1.js (c) Vivek Chandra');
    console.log('usage:');
    console.log('--help                 Help');
    console.log('--name={your_name}     Say Hello to you.');
    console.log('--file={name}          Show contents of file {name}');
}