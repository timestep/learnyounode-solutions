(function(){
  var fs = require('fs');
  var cli_argument = process.argv.slice(2);
  var filePath = cli_argument[0];

  var numberOfLines = function (err,data) {
    lines = data.toString().split('\n').length - 1;
    return console.log(lines);
  }

  fs.readFile(filePath,numberOfLines);

})();