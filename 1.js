//parse initial arguments into a json "args"
var args = require('minimist')(process.argv.slice(2));

// require another js file (2.js) which has functions to perform all tasks.
var two = require('./2.js');

//browse through all options (arguments) entere by user i.e. through all elements of json "args"
var i = 0;
for (var key in args) {
    i++;
    //skip first one coz its "_" [default]
    if (i == 1)
        continue;

    if (args.hasOwnProperty(key)) {
        switch (key) {
            case 'n':
                console.log("Hello " + args[key]);
                break;
            case 'f':
                two.read(args[key]);
                break;
            case 'w':
                two.write(args[key]);
                break;
            case 'r':
                two.rename(args[key]);
                break;
            case 'h':
                printHelp();
                break;
            default:
                console.log('-' + key + ' is not a valid option. Run "node 1 -help" to know more.');
        }
    }
}

//if no arguments provided i.e. only default one.
if (i == 1)
    printHelp();

function printHelp() {
    console.log("");
    console.log('1.js (c) Vivek Chandra');
    console.log("");
    console.log('usage: node 1 -<option> <value>');
    console.log("");
    console.log('where <option> is one of:');
    console.log('-n                     Greet you, with your name.');
    console.log('-f                     Display contents of an existing file.');
    console.log('-w                     Write something in a new/ existing file.');
    console.log('-r                     Rename an existing file.');
    console.log('-h                     Display Help Section.');
}