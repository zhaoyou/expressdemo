var config = require('./config')
var dataProvider = require('./controller/dataProvider')

var app = config.express.createServer(
  config.express.bodyParser(),    
  config.express.logger()
);

app.use(config.express.static(__dirname + '/assets', {maxAge: 3600000 * 24 * 30}));

app.set('view engine', 'html');
app.set('views',  __dirname + '/views');
app.set('view options', {'layout': true});
app.register('html', config.ejs);


app.configure(function(){
  app.use(config.express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.get('/list', dataProvider.list);
app.get('/', dataProvider.list);

console.log('server is start ' + config.hostname + ' listen ' + config.port);
app.listen(config.port, config.hostname);
