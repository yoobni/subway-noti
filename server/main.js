import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from "webpack";
// HTTP Request logger
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';

// File Import
import api from './routes';

const app = express();

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log("Connected to mongodb server");
});
mongoose.connect('mongodb://localhost/Desktop/project/subway-noti');

app.use(session({
    secret: 'test1234',
    resave: false,
    saveUninitialized: true
}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', api);

const port = 3000;
const devPort = 4000;

app.use('/', express.static(path.join(__dirname, './../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../dist/index.html'));
});

app.get('/hello', (req, res) => {
    return res.send('Hello Test');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

if (process.env.NODE_ENV == 'development') {
    console.log("Development mode");
    const config = require('../webpack.config.js');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log("Webpack dev server is listening on port", devPort);
    });
}