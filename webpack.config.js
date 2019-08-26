const CopyPlugin = require("copy-webpack-plugin");

/** @type import('webpack').Configuration */
module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ]
  },
  plugins: [
    new CopyPlugin(
      [{ from: ".", to: "." }], { context: 'public' }
    )
  ],
}