const clientWebpackConfig = require('./webpackConfigs/webpack.client.config')
const backendWebpackConfig = require('./webpackConfigs/webpack.server.config')


module.exports = [
  clientWebpackConfig,
  backendWebpackConfig
]