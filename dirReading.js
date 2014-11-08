module.exports = function(dirPath,extFilter,cb){
  var fs = require('fs');
  var path = require('path');

  var listOfFiles = function (err,data) {
    if(err) return cb(err);
    var filtered = [];
    for (var i = data.length - 1; i >= 0; i--) {
      if(path.extname(data[i]) == ('.'+extFilter)) filtered.push(data[i])
    };
    return cb(err,filtered);
  }

  fs.readdir(dirPath,listOfFiles);

};