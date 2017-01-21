module.exports = {
  entry: {
    exampleApp: './src/entry/index.js',
  },
  output: {
    path: './public/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
  devtool: 'source-map',
};
