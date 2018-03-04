if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'production';
}
var config = require('./config/config');
var app = require('./config/express')();
process.on('uncaughtException', function (err) {
    console.log('Error:', err);
});
app.get('server').listen(config.port, config.hostname);
exports = module.exports = app;
console.log('Server started on ' + config.hostname + ':' + config.port + ' in ' + process.env.NODE_ENV + ' mode');
//# sourceMappingURL=server.js.map