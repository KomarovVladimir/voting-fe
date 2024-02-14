const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = (env, argv) => {
    return {
        entry: path.resolve(__dirname, "../src/index.tsx"),
        mode: env.production ? "production" : "development",
        devtool: env.production ? "source-map" : "eval",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "../dist"),
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: {
                        loader: "ts-loader",
                        options: {
                            configFile: path.resolve(
                                __dirname,
                                "tsconfig.json",
                            ),
                        },
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            alias: {
                app: path.resolve(__dirname, "../src/app"),
                assets: path.resolve(__dirname, "../src/assets"),
                common: path.resolve(__dirname, "../src/common"),
                components: path.resolve(__dirname, "../src/components"),
                features: path.resolve(__dirname, "../src/features"),
                routing: path.resolve(__dirname, "../src/routing"),
            },
        },
        plugins: [
            new ESLintPlugin({
                extensions: ["js", "jsx", "ts", "tsx"],
                overrideConfig: {
                    extends: [
                        "eslint:recommended",
                        "plugin:@typescript-eslint/recommended",
                    ],
                    parser: "@typescript-eslint/parser",
                    plugins: ["@typescript-eslint"],
                    root: true,
                    rules: {
                        "@typescript-eslint/no-unused-vars": "warn",
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "../public/index.html"),
            }),
            new CleanWebpackPlugin(),
        ],
        devServer: {
            open: true,
            static: {
                directory: path.join(__dirname, "../public"),
            },
            compress: true,
            port: 3000,
            liveReload: false,
            hot: true,
            client: {
                overlay: false,
            },
        },
    }
}
