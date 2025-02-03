const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const STATIC_DIR = path.resolve(__dirname, '..', 'static');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const plugins = [
    new FileManagerPlugin({
        events: {
            // Remove build dir
            onStart: {
                delete: [BUILD_DIR],
            },
            onEnd: {
                // Copy static files
                copy: [{
                    source: STATIC_DIR,
                    destination: BUILD_DIR,
                }, ],
            },
        },
    }),
    new HtmlWebpackPlugin({
        template: path.join(PUBLIC_DIR, 'index.html'),
        filename: 'index.html',
        title: 'ToukaEscape'
    }),
    new webpack.HotModuleReplacementPlugin(), // For page reloading
];

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

const devServer = {
    historyApiFallback: true, // Apply HTML5 History API if routes are used
    open: true,
    compress: true,
    watchFiles: path.join(__dirname, '..', 'src'),
    allowedHosts: 'all',
    hot: true, // Reload the page after changes saved (HotModuleReplacementPlugin)
    client: {
        // Shows a full-screen overlay in the browser when there are compiler errors or warnings
        overlay: {
            errors: true,
            warnings: true,
        },
        progress: true, // Prints compilation progress in percentage in the browser.
    },

    port: 9000,
    /**
     * Writes files to output path (default: false)
     * Build dir is not cleared using <output: {clean:true}>
     * To resolve should use FileManager
     */
    devMiddleware: {
        writeToDisk: true,
    },
};

module.exports = {
    devServer,
    plugins,
    entry: path.join(__dirname, '..', 'src/app/index.ts'),
    output: {
        path: BUILD_DIR,
        /**
         * Helps to avoid of MIME type ('text/html') is not a supported stylesheet
         * And sets address in html imports
         */
        publicPath: '/',
    },
    // Checking the maximum weight of the bundle is disabled
    performance: {
        hints: false,
    },
    // Modules resolved
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        strictExportPresence: true, // Strict mod to avoid of importing non-existent objects
        rules: [
            // --- JS | TS USING BABEL
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // Using a cache to avoid of recompilation
                    },
                },
            },
            // --- HTML
            { test: /\.(html)$/, use: ['html-loader'] },
            // --- SCSS or CSS
            {
                test: /\.(scss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ],
            },
            // --- IMG
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext]',
                },
            },
            // --- FONTS
            {
                test: /\.(woff|woff2?|ttf|otf|eot)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext]'
                },
            },
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
};