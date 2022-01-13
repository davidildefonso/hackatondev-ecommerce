// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = (_env, argv) =>  {

	const backend_url = argv.mode === "production"
		? "http://localhost:3000/api/"
		: "http://localhost:3003/api/";

	return {
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
			proxy: { // proxy URLs to backend development server
				'/': 'http://localhost:3003'
			},
			static: path.resolve(__dirname, 'dist'),
			compress: true,
			port: 4000,
		},
		devtool: 'source-map',
		plugins: [
			new webpack.DefinePlugin({			
				'process.env.BACKEND_URL': JSON.stringify(backend_url)
			})
		]
	};
};