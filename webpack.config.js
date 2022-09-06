const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require("dotenv-webpack");
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js','.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg|gif|bmp)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new Dotenv({ systemvars: true }),
        new WebpackPwaManifest({
            name: 'Clothing Store',
            shortname: 'RopaDpaca',
            description: 'Cool cloths to awesome prices',
            background_color: '#fff',
            theme_color: '#b1a',
            icons: [
               {
                    src: path.resolve('src/assets/crown.png'),
                    sizes: [128, 256, 512]
               } 
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://i.ibb.co'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images'
                    }
                }
            ],
            maximumFileSizeToCacheInBytes: 5000000
        })
    ],
    devServer: {
        static: { directory: path.join(__dirname, 'dist') },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    }
}