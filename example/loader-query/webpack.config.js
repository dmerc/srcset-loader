'use strict';

const path = require('path');
const config = require('../webpack.common.config');

config.entry = path.join(__dirname, 'example.js');
config.output.path = path.join(__dirname, 'build');

config.module.rules.unshift({
  test: /whale.jpeg/,
  loader: 'srcset-loader',
  options: {
    sizes: ['200w', '800w'],
    placeholder: true,
  },
});

module.exports = config;
