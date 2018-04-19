var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')//this plugin helps to create the html files with the script chunks

var basePath = __dirname;

module.exports = {
    entry: {
        vendor: ["jquery"],
        app: "./dist/bootstrapper.js"
    },
    output: {
        path: path.join(basePath, "build"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html", //Name of file in ./dist
            template: "index.html", //Name of template in ./src
            favicon: "favicon.ico",
            hash: true
        })
    ]
};