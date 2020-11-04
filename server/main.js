import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from "webpack";

const app = express();
const port = 3000;
const devPort = 4000;

app.use('/', express.static(path.join(__dirname, './../dist')));

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