'use strict';

import { EggAppInfo} from 'beidou-core';
import { Configuration } from 'webpack';
// const webpack = require('webpack');
// const ManifestPlugin = require('webpack-manifest-plugin');

export default (app: EggAppInfo, defaultConfig: Configuration ): Configuration => {
  const tsLoader =  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  };
  defaultConfig.mode = 'development';
  defaultConfig.module = defaultConfig.module || { rules: [] };
  defaultConfig.module.rules.push(tsLoader);
  return defaultConfig;
};