const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "./Component.vue"),
  output: {
    filename: './dist.js'
  },
  module: {
    // module.rules is the same as module.loaders in 1.x
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'test': path.resolve(__dirname,'../index.js')
          },
        }
      }
    ]
  }
}
