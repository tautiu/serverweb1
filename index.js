if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const Server = require('./app');

const server = new Server();

server.listen();