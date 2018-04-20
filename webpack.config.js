var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')//this plugin helps to create the html files with the script chunks
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var basePath = __dirname;

module.exports = {
    entry: {
        vendor: ["jquery", "bootstrap", "bootstrap/dist/css/bootstrap.css","font-awesome/css/font-awesome.css", "./src/style.css"],
        app: "./src/bootstrapper.ts"
    },
    output: {
        path: path.join(basePath, "build"),
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
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
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true //HMR doesn't work without this
                    }
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader"
                }]
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }))
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('styles.bundle.css'),
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
