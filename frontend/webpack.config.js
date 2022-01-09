// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
		{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: 'ts-loader',
		
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader',  "postcss-loader"],
		},
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 4000,
  },
  devtool: 'source-map',

};