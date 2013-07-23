var http = require('http');

module.exports = function (req, res){
  var options = {
    host: 'http://dev.knotch.it:8080',
    path: '/miniProject/user_feed/500e3b57bbcd08696800000a/15'
  };
  var cb = function (response){
    var str = '';
    response.on('data', function (chunk){
      str += chunk;
    });
    response.on('end', function (){
      res.send(str);
    });
  };
  http.request(options, cb).end();
};