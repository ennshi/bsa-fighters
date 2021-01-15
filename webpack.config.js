const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: './src/javascript/index.js',
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            configFile: "./babel.config.js",
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    }
};
