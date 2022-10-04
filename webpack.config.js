const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const modeConfiguration = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);

  return merge(
    {
      mode,
      entry: './src/index.tsx',
      devServer: {
        hot: true,
        open: true,
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
        },
        extensions: ['.ts', '.js', '.tsx', '.css', '.scss'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.jpe?g|png$/,
            exclude: /node_modules/,
            use: ['url-loader', 'file-loader'],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
          },
        ],
      },
      output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundled.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
    modeConfiguration(mode)
  );
};
