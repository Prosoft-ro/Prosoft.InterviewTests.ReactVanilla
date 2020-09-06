const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outDir = path.resolve(__dirname, 'wwwroot/dist');
const srcDir = path.resolve(__dirname, 'src');
const baseUrl = '/dist/';

module.exports = {
    entry: {
        app: './src/main.jsx',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: [/\.scss$/, /\.css$/],
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|eot|woff|woff2)$/,
                include: srcDir,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['app'],
            minify: false,
            inject: false, //Generam tag-urile manual prin sintaxa de templating lodash
            template: path.resolve(
                __dirname,
                'Views/Default/Index.template.cshtml',
            ),
            filename: path.resolve(__dirname, 'Views/Default/Index.cshtml'),
        }),
        new MiniCssExtractPlugin({
            filename: devMode
                ? '[name].bundle.[hash].css'
                : '[name].bundle.[contenthash].css',
            chunkFilename: devMode ? '[id].bundle.css' : '[id].bundle.css',
        }),
    ],
    watchOptions: {
        ignored: outDir,
    },
    output: {
        filename: devMode
            ? '[name].bundle.[hash].js'
            : '[name].bundle.[chunkhash].js',
        path: outDir,
        publicPath: baseUrl,
    },
};
