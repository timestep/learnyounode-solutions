(function () {
  var net = require('net');
  var moment = require('moment')
  var cli_arguments = process.argv.slice(2);
  var port = cli_arguments[0];

  var currentTime = function () {
    var date = moment().format('YYYY-MM-DD HH:mm');
    return date + '\n';
  }

  var socketHandle = function (socket) {
    socket.write(currentTime());
    socket.end();
  }

  var server = net.createServer(socketHandle);
  server.listen(port);
})();