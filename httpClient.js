(function () {
  var cli_arguments = process.argv.slice(2);
  var http = require('http');
  var url = cli_arguments[0];

  var printDataToCLI = function (data) {
    console.log(data);
  }

  var resStream = function (res) {
    res.setEncoding('utf8')
    res.on('data',printDataToCLI)
  }

  http.get(url,resStream);

})();