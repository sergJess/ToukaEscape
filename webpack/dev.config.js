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
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        esModule: true
                    }
                },
                { loader: 'resolve-url-loader' },
                { loader: 'sass-loader' },
            ],
        }, ],
    },

    devtool: 'inline-source-map',
    output: {
        filename: '[name].[contenthash].js',
    },
});