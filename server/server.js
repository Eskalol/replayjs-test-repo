var express = require('express');
var app = express();

console.log('cool');
app.set('port', (process.env.PORT || 5000));

app.use(express.static('dist'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('listening on port ' + process.env.PORT || 5000);
});
