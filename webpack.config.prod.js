const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.tsx",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.less$/, use: ["style-loader","css-loader", "less-loader"]},
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

    plugins: [
        new HtmlWebpackPlugin({
            title: "Template",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                keepClosingSlash: true
            },
            inject: true,
            template: "./src/index.ejs",
        })
    ],
}