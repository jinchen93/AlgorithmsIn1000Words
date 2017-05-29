const path = require('path');

module.exports = {
    entry: './lib/main.js',
	  devtool: 'source-map',
    output: {
        filename: './algorithms_in_1000_words.js'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
};
