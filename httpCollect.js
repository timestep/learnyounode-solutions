(function () {
  var bl = require('bl');
  var cli_arguments = process.argv.slice(2);
  var http = require('http');
  var url = cli_arguments[0];

  var printDataToCLI = function (err,data) {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }

  var resStream = function (res) {
    res.setEncoding('utf8')
    res.pipe(bl(printDataToCLI));
  }

  http.get(url,resStream);

})();