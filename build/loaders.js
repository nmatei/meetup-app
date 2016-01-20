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
  },
  {
    test: /\.md$/,
    loader: "html-loader!markdown-loader?gfm=false"
  },
  {
    test: /\.svg$/,
    loader: "url?limit=10000&mimetype=image/svg+xml",
  }, {
    test: /\.png$/,
    loader: "url-loader?mimetype=image/png",
  }, {
    test: /\.jpg$/,
    loader: "url-loader?mimetype=image/jpg",
  }
]
