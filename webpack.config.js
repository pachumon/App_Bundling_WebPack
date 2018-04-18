var path = require("path");
var webpack = require("webpack");


var basePath = __dirname;

module.exports = {
    entry: {
        app: "./dist/bootstrapper.js"
    },
    output: {
        path: path.join(basePath, "build"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};
