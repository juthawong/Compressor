const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDevelopment = process.argv.indexOf('--development') !== -1;

const entryPath = path.join(__dirname, 'src/js/index.js');
const entry = isDevelopment ? [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    entryPath
] : entryPath;

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
        __DEV__: isDevelopment
    }),
    new ExtractTextPlugin('css/bundle.css')
];

isDevelopment && plugins.push(new webpack.HotModuleReplacementPlugin());
!isDevelopment && plugins.push(new webpack.optimize.UglifyJsPlugin());


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: entry,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.s?css/,
                loaders: isDevelopment ? 'style-loader!css-loader?sourceMap!sass-loader?sourceMap' : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader!sass-loader"
                })
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: plugins
};