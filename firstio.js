(function(){
  var fs = require('fs');
  var cli_argument = process.argv.slice(2);
  var filePath = cli_argument[0];

  var file = fs.readFileSync(filePath);
  lines = file.toString().split('\n').length - 1;

  return console.log(lines);
})();