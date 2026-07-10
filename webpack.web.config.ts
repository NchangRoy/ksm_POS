// Standalone build of the POS renderer as a plain website — no Electron
// involved. The renderer (src/renderer.ts -> src/app.tsx and everything it
// imports) has zero electron/ipcRenderer/preload dependencies (verified:
// only src/index.ts, the Electron main-process entry, touches the `electron`
// module), so the exact same UI code runs fine as a normal web page.
//
// Deliberately separate from webpack.renderer.config.ts (the Electron build):
// that one includes native-module loaders (node-loader, asset-relocator)
// that a browser bundle doesn't need and shouldn't ship.
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/renderer.ts',
  output: {
    path: path.resolve(__dirname, 'dist-web'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: { transpileOnly: true },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // Static text substitution at build time — process.env.API_BASE_URL
    // never exists at runtime in a browser, this just inlines the string.
    new webpack.DefinePlugin({
      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL || ''),
    }),
  ],
};

export default config;
