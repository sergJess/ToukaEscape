const { merge } = require('webpack-merge');
const common = require('./common.config.js');

module.exports = merge(common, {
    mode: 'development',
    target: 'web',
    module: {
        rules: [{
            // --- SCSS or CSS
            test: /\.(scss|css)$/i,
            use: [
                'style-loader',
                'css-loader',
                'resolve-url-loader',
                'sass-loader',
            ],
        }, ],
    },

    devtool: 'inline-source-map',
    output: {
        filename: '[name].[contenthash].js',
    },
});