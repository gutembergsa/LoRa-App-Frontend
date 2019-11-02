const restify = require('restify');

const server = restify.createServer({
    name: 'Lora App',
    version: '1.0.0'
});

server.get('/*', restify.plugins.serveStaticFiles('./dist'));

server.listen(process.env.PORT || 2000, () => {
    console.log('%s running on %s', server.name, server.url);
});