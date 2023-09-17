const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/front/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/static'),
    },
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, '../../dist/static'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/front/public", to: "./public" },
            ],
        }),
    ],
};