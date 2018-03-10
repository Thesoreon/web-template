const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.tsx",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, enforce: 'pre', loader: 'tslint-loader'},
            { test: /\.less$/, use: ["style-loader","css-loader", "less-loader"]},
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'less-loader']
                })
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 100
                }
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        stats: "errors-only",
        open: true,
        historyApiFallback: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "DEVBUILD",
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/index.ejs",
        }),
        new ExtractTextPlugin({
            filename: "styles.[chunkhash].css",
            disable: false,
            allChunks: true
        })
    ],
}