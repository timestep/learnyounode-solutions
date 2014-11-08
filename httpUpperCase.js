(function(){
  var http = require('http');
  var map = require('through2-map');
  var cli_arguments = process.argv.slice(2);
  var port = cli_arguments[0];
  var filePath = cli_arguments[1];

  var handleRequest = function (req, res) {
    if(req.method != "POST") return res.end();

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);

  }

  var server = http.createServer(handleRequest);
  server.listen(port);

})();