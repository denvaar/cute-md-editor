var webpack = require('webpack');
var isProductionBuild = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    //filename: 'bundle.js',
    //publicPath: '/'
    filename: 'dist/cute-md-editor.js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'cute-md-editor'
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    showdown: 'showdown'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: (function () {
    var plugins = [];
    if (isProductionBuild) {
      plugins.push(new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }));
      plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      }));
    } else {
      /* development-specific plugins here */
    }
    return plugins;
  })(),
  module: {
    loaders: [
      {
        test: /\.js?|\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        include: /node_modules\/font-awesome/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpg|gif|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader!file-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
