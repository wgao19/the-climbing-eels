const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const common = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
      path.join(__dirname, 'stories'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: require('postcss-cssnext'),
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'src/style')],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('index.css')],
};

if (TARGET === 'dev') {
  module.exports = merge(common, {
    mode: 'development',
    devServer: {
      contentBase: __dirname,
      compress: true,
      port: 1234,
      historyApiFallback: true,
    },
  });
} else {
  module.exports = merge(common, {
    mode: 'production',
  });
}
