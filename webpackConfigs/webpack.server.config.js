const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  externals: [nodeExternals()],

  externalsPresets: {
    node: true
  },

  entry: path.resolve(__dirname, '../coin-backend/src/index.js'),

  output: {
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.js',
  },

  module: {
    rules: [
    ],
  },
};