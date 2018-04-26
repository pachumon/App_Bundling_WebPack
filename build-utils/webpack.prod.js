const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')//this plugin helps to create the html files with the script chunks
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
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
                    use: [
                        { loader: 'css-loader', options: { minimize: true } }
                    ]
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
        }),
        new UglifyJsPlugin({ //use this plugin to minify and mangle scripts for production grade build
            uglifyOptions: {
                minimize: true,
                mangle: true,
                output: {
                    comments: false
                }
            },
            sourceMap: true,
            exclude: [/\.min\.js$/gi]

        })
    ]
}

module.exports = config;