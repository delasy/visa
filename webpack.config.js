const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './frontend/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'common.js',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
