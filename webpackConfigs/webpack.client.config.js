const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  target: 'web',
  resolve: {
    modules: ['node_modules'],
  },

  entry: path.resolve(__dirname, '../coin-frontend/src/index.js'),

  output: {
    path: path.resolve(__dirname, '../build/client'),
    filename: 'main.js',
    publicPath: '/'
  },

  devServer: {
    static: path.resolve(__dirname, '../build/client'),
    compress: true,
    port: 3001,
    open: true,
    historyApiFallback: true,
    hot: true

  },

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Coin',
      template: path.resolve(__dirname, '../coin-frontend/src/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    }),
  ],

  module: {
    rules: [

      {
        test: /\.js$/,

        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env',
            ["@babel/preset-react", { "runtime": "automatic" }]
          ],
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.woff$|\.woff2$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },

      {
        test: /\.svg$|\.jpg$|\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
    ],
  },
}
