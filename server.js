import { createServer, plugins } from 'restify';

const server = createServer({
    name: 'Lora App',
    version: '1.0.0'
});

server.get('/*', plugins.serveStaticFiles('./dist'));

server.listen( process.env.PORT || 2000, function () {
    console.log('%s running on %s', server.name, server.url);
});