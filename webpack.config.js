const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const devMode = process.env.NODE_ENV !== "production";
console.log("IS DEV: " + devMode);

const cssLoaders = (extra) => {
    const loaders = ["style-loader", "css-loader"];
    // const loaders = [MiniCssExtractPlugin.loader, "css-loader"];

    if (extra) loaders.push(extra);
    console.log(loaders);
    return loaders;
};
// const filename = (ext) => (devMode ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Data Storage",
            template: "./index.html",
        }),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: filename("css"),
        // }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./src/favicon.ico"),
                    to: path.resolve(__dirname, "./dist"),
                },
            ],
        }),
        new Dotenv(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders("sass-loader"),
            },
            {
                test: /\.(png|jpg|svg|gif})$/,
                type: "asset/resource",
            },
        ],
    },

    devServer: {
        port: 4200,
        hot: !devMode,
    },
};
