module.exports = {
  baseUrl: '',

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        'src/custom.less'
      ]
    }
  },

  lintOnSave: undefined
}
