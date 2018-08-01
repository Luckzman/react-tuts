const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/app/index.js',
  output: {
    path: path.resolve('dist/app'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader', 'eslint-loader'],
      // },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: 'index.html',
    }),
  ],
};
