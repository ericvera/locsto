var path = require('path')

module.exports = {
  entry: './src/locsto.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'locsto.js',
    library: 'Locsto',
    libraryTarget: 'commonjs'
  }
}
