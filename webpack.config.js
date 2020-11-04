// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const {CleanWebpackPlugin} = require("clean-webpack-plugin");
//
// const outputDirectory = "dist";
//
// module.export = {
//     entry: "./src/client/index.js",
//     output: {
//         path: __dirname,
//         filename: "./dist/bundle.js",
//         publicPath: "/",
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                 },
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     "style-loader",
//                     "css-loader"
//                 ]
//             }
//         ]
//     },
//     devServer: {
//         port: 3000,
//         open: true,
//         proxy: {
//             "/api": "http://localhost:8080"
//         }
//     },
//     devtool: 'inline-source-map',
//     plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//             template: "./public/index.html"
//         })
//     ]
// }
const webpack = require("webpack");

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
