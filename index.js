var netscape = require('netscape-bookmarks');
var fs = require('fs');

var args = process.argv.slice(2);

if(args.length != 1) {
  console.log();
  console.error("Expected only the path to an input bookmarks JSON file as an argument but got " + args.length + " arguments instead.");
  console.log();
  console.log("Syntax:  node index.js <bookmarks JSON input file>");
  console.log();
  process.exit(1);
}

var inputFile = args[0];

if(!fs.existsSync(inputFile)) {
  console.log();
  console.error("Input file \"" + inputFile + "\" does not exist.");
  console.log();
  process.exit(1);
}

var bookmarks = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
var html = netscape(bookmarks);
console.log(html);
