const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
// const json = require('./src/data/goods.json');

module.exports = {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
      index_catalog: path.resolve(__dirname, './src/index_catalog.js'),
      index_basket: path.resolve(__dirname, './src/index_basket.js'),
      index_good: path.resolve(__dirname, './src/index_good.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/index.html'), // шаблон
        filename: 'index.html', // название выходного файла
        chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, './src/catalog.html'),
            filename: 'catalog.html',
            chunks: ['index_catalog']
        }),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, './src/good.html'),
            filename: 'good.html',
            chunks: ['index_good']
        }),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, './src/basket.html'),
            filename: 'basket.html',
            chunks: ['index_basket']
        }),

        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
              {
                from: "src/img", to: "img"
              }
            ]
          })
    ],
    module: {
        rules: [
           // JavaScript
           {
             test: /\.js$/,
             exclude: /node_modules/,
             use: ['babel-loader'],
           },
           // картинки
           {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
           },
           //Шрифты и svg
           {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
            },
            //SCSS to CSS
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader'],
            },
            // HTML Templates with html-loader
            {
              test: /\.(html)$/,
              include: path.join(__dirname, 'src/views'),
              use: {
                  loader: 'html-loader',
                  options: {
                      interpolate: true
                  }
              }
            }
         ]
     },

     mode: 'development',
     devServer: {
      historyApiFallback: true,
      static: './dist',
      // contentBase: path.resolve(__dirname, './src/data'),
      open: true, compress: true, hot: true, port: 8081,},

      optimization :{
        splitChunks: {
            cacheGroups: {
             vendor: {
              test: /[\\/]node_modules[\\/].*\.js$/,
              chunks: 'all'
             }
            }
           }
      }



}