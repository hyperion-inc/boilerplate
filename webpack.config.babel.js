import { join } from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const babelrc = fs.readFileSync(join(__dirname, '.babelrc'), 'utf8');

const config = {
  context: join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      query: { ...JSON.parse(babelrc) }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src', 'index.html'),
      minify: {
        removeComments: true,
        keepClosingSlash: true
      },
      inject: true
    })
  ]
};

export default config;
