const fastify = require('fastify')();
const path    = require('path')

const host    = process.env.IP   || '0.0.0.0'
const port    = process.env.PORT || 8080

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'static'),
    prefix: '/',
});

/*fastify.get('/path', (request, reply) => {
});*/

// Start the server
fastify.listen({ port, host }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
