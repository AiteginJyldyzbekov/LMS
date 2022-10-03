module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.sa?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});