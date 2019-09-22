const path = require('path')
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}