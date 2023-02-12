const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    const config = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'qr-frontend-mentor/bundle.js',
    publicPath: '/qr-frontend-mentor/'
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname,"src/components/"),
            "@assets": path.resolve(__dirname,"src/assets/"),
            "@styles": path.resolve(__dirname,"src/styles/")
        }
    },
    module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
        },
        {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
        ]
        },
        {
        test: /\.png$/,
        use: [
            {
            loader: 'url-loader',
            options: {
                mimetype: 'image/png'
            }
            }
        ]
        },
        {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'QR Frontend Mentor',
            templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
            filename: 'index.html',
            favicon: './src/assets/favicon-32x32.png'
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
            },
        compress: true,
        port: 3000,
        },
    };

    module.exports = config;