import { join } from 'path';
import fs from 'fs';
const babelrc = fs.readFileSync(join(__dirname, '.babelrc'), 'utf8');

const config = {
  context: join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      query: { ...JSON.parse(babelrc) }
    }]
  }
};

export default config;
