(function () {
  var bl = require('bl');
  var async = require('async');

  var cli_arguments = process.argv.slice(2);
  var http = require('http');
  var url1 = cli_arguments[0];
  var url2 = cli_arguments[1];
  var url3 = cli_arguments[2];

  var httpGet = function (url,cb) {
    http.get(url,function (res) {
      res.setEncoding('utf8')
      res.pipe(bl(function (err,data) {
        data = data.toString();
        return cb(err,data);
      }));
    });
  }

  var endOfAsyncParellel = function (err,results) {
    results.forEach(function (x) {
      console.log(x);
    })
  }

  async.parallel([function(cb){
    httpGet(url1,cb);
  },function(cb){
    httpGet(url2,cb);
  },function(cb){
    httpGet(url3,cb);
  }],endOfAsyncParellel);

})();