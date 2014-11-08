(function () {
  var dirReading = require('./dirReading');
  var cli_argument = process.argv.slice(2);
  var dirPath = cli_argument[0];
  var extFilter = cli_argument[1];

  var printFilteredList = function (err,data) {
    if(err) return console.log(err);
    return console.log(data.reverse().join('\n'));
  }

  dirReading(dirPath,extFilter,printFilteredList);

})();