(function(){
  var http = require('http');
  var map = require('through2-map');
  var url = require('url');
  var moment = require('moment');

  var cli_arguments = process.argv.slice(2);
  var port = cli_arguments[0];
  var filePath = cli_arguments[1];

  var renderUnixTime = function (query) {
    var format = query.split('=')[1];

    var x = new Date(format);
    var yep = {
      unixtime: x.getTime()
    }
    return yep;
  }

  var renderTime = function (query) {
    var format = query.split('=')[1];
    var values = new Date(format);
    var x = {
      hour: values.getHours(),
      minute: values.getMinutes(),
      second: values.getSeconds()
    }
    return x;
  }

  var server = http.createServer(function (req, res) {
    if(req.method != "GET") return res.end();
    res.writeHead(200,{'Content-Type':'application/json'})

    var parsedUrl = url.parse(req.url);
    var query = parsedUrl.query;
    var endPoint = parsedUrl.pathname;

    if(endPoint == '/api/unixtime'){
      res.end(JSON.stringify(renderUnixTime(query)));
    } else if (endPoint == '/api/parsetime'){
      res.end(JSON.stringify(renderTime(query)))
    } else {
      res.end();
    }
  });

  server.listen(port);

})();