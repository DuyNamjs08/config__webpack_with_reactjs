const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        bundle: "./src/index.js",
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$|\.css$/,
                use: ["style-loader", "css-loader", 'sass-loader',]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            filename: 'index.html'
        })
    ],
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all'
        },
        runtimeChunk: {
            name: "manifest",
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        open:true,
        port: 9000,
    },
    watch: true,
    mode: "development"
};