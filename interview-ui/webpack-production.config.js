/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	entry: [path.join(__dirname, '/src/app/index.js')],
	// output config
	output: {
		path: buildPath, // Path of output file
		filename: 'index.js', // Name of output file
	},
	plugins: [
		// Define production build to allow React to strip out unnecessary checks
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new UglifyJsPlugin(),
		new TransferWebpackPlugin([
			{from: 'www'},
		], path.resolve(__dirname, 'src')),
	],
	module: {
		rules: [
			{
				test: /\.js$/, // All .js files
				use: [
					{ loader: 'babel-loader' }
				],
				exclude: [nodeModulesPath]
			}
		]
	},
};

module.exports = config;
