(function(){
  var fs = require('fs');
  var path = require('path');
  var cli_argument = process.argv.slice(2);
  var dirPath = cli_argument[0];

  var listOfFiles = function (err,data) {
    var filtered = []
    for (var i = data.length - 1; i >= 0; i--) {
      if(path.extname(data[i]) == '.md') filtered.push(data[i])
    };
    return console.log(filtered.reverse().join('\n'));
  }

  fs.readdir(dirPath,listOfFiles);

})();