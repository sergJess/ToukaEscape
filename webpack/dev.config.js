const { merge } = require('webpack-merge');
const common = require('./common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
];

module.exports = merge(common, {
    mode: 'development',
    target: 'web',
    plugins,
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