const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// авт-ки подкл скрипкт к html файлу

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   // mode: 'development',
   mode: 'production',
   devServer: {
      port: 3000,
   },
   optimization: {
      minimize: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
      ],
   },
};
