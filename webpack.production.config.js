var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        // publicPath: '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ],
    module: {
        loaders: [{
            loaders: ['babel'],
            include: [
                path.resolve(__dirname, 'src')
            ]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }]
    },
    postcss: function() {
        return [autoprefixer, precss];
    }
}
