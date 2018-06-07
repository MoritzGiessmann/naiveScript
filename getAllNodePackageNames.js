var writeFile = require('write');
let names = require("all-the-package-names");
 
let processedNames;
names.forEach(function(name){
	processedNames += '"' + name + '": "latest",\n' 
});

writeFile('packagenames.txt', processedNames, function(err) {
  if (err) console.log(err);
});
