module.exports = {
  publicPath: '/' + process.env.VUE_APP_BASE_URL,
  outputDir: 'dist' + (process.env.VUE_APP_BASE_URL ? `/${process.env.VUE_APP_BASE_URL}` : ''),
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/player.js',
      template: 'public/index.html',
      filename: './index.html',
      title: process.env.VUE_APP_TITLE,
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    demo: {
      entry: 'src/demo.js',
      template: 'public/index.html',
      filename: './demo.html',
      title: process.env.VUE_APP_TITLE,
      chunks: ['chunk-vendors', 'chunk-common', 'demo'],
    },
  },
  parallel: require('os').cpus().length > 1,
  runtimeCompiler: true,
}
