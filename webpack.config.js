const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', 'src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'app.js',
  },
};
