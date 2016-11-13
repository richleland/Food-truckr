// Requires
const getConfig = require('hjs-webpack');
const webpack = require('webpack');
const fs      = require('fs');
// Path
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve
// vars in getConfig
const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

config = getConfig({
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
});

module.exports = config;
