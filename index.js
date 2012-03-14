var config = require('./config')
var dataProvider = require('./controller/dataProvider')

var app = config.express.createServer(
  config.express.bodyParser(),    
  config.express.logger()
);

app.use(config.express.static(__dirname + '/assets', {maxAge: 3600000 * 24 * 30}));

app.set('view engine', 'html');
app.set('views',  __dirname + '/views');
app.register('html', config.ejs);


app.configure(function(){
  app.use(config.express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.get('/list', dataProvider.list);

app.listen(config.port, config.hostname);
