const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

//routing
server.use(jsonServer.rewriter({
    '/top-headlines?language=en&q=:query&sortBy=:sort': '/articles'
}));

//endpoint
server.use('/', router);

//start server
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log('JSON server is running on port %s', port)
});
