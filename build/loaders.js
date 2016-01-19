module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [
      'react-hot',
      'babel-loader'
    ]
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: 'style-loader!css-loader?modules&localIdentName=[local]--[hash:base64:5]!autoprefixer-loader!sass-loader'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }
]
