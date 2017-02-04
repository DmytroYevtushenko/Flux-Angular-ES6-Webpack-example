var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
require('es6-promise').polyfill();

module.exports = {

    context: path.join(__dirname, '/App/src'),
    entry: "./app.js",
    output: {
        path: path.join(__dirname, '/App'),
        filename: "./build/bundle.js"
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
    resolve: {
        root: [
           path.resolve('./App/src'),
          path.resolve('./node_modules'),
          path.resolve('./Public')
        ]
    },

    module: {
        preLoaders: [
          {
              test: /\.js/,
              exclude: /node_modules/,
              loader: 'jshint-loader',
          }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /\/node_modules\//,
            loader: 'babel?presets[]=es2015'
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
        ]
    },

    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,

        esversion: 6
    },

    htmlLoader: {
        interpolate: true
    },

    plugins: [
         new WebpackNotifierPlugin(),
         new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
         new webpack.NoErrorsPlugin(),
         new ExtractTextPlugin('./build/bundle.css'),
      new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'
      })
    ]
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}