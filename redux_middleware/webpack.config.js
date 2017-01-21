module.exports = {
  entry: {
    exampleApp: './src/entry/index.js',
  },
  output: {
    path: './public/',
    filename: '[name].bundle.js',
  },
  moduel: {
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
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
};
