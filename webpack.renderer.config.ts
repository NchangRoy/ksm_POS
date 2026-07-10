import type { Configuration } from 'webpack';
import webpack from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [
    "style-loader",
    "css-loader",
    "postcss-loader"
  ]
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    // The renderer has no Node `process` global (contextIsolation) — without
    // this, any `process.env.API_BASE_URL` reference throws at module load
    // (see webpack.web.config.ts, which does the same for the web build).
    new webpack.DefinePlugin({
      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL || ''),
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};