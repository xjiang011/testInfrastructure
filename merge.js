const fs = require('fs')

var merge = require('merge-package-json');
var src = fs.readFileSync('../localPackage.json');
var dst = fs.readFileSync('./sharedPackage.json');
 
// Create a new `package.json` 
fs.writeFileSync('../package.json', merge(dst, src));