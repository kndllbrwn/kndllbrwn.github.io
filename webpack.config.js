const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './js/Client.js'],
  output:{
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer:{
    inline:true,
    contentBase:'./public',
    port:3000
  },
  module:{
    loaders:[
      {test:/\js$/,
       exclude:/node_modules/,
       loader:'babel-loader'
      }
    ]
  }
};