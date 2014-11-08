(function(){
  var http = require('http');
  var fs = require('fs');
  var cli_arguments = process.argv.slice(2);
  var port = cli_arguments[0];
  var filePath = cli_arguments[1];

  var handleRequest = function (req, res) {
    var stream = fs.createReadStream(filePath);
    stream.pipe(res);
  }

  var server = http.createServer(handleRequest);

  server.listen(port);

})();