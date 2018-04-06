/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
	// Entry points to the project
	entry: path.join(__dirname, '/src/app/index.js'),
	// Server Configuration options
	devServer: {
		contentBase: 'src/www', // Relative directory for base of server
		hot: true, // Live-reload
		inline: true,
		port: 3000, // Port Number
		host: 'localhost', // Change to '0.0.0.0' for external facing server
	},
	output: {
		path: buildPath, // Path of output file
		filename: 'index.js',
	},
	plugins: [
		// Enables Hot Modules Replacement
		new webpack.HotModuleReplacementPlugin(),
		// Allows error warnings but does not stop compiling.
		new webpack.NoEmitOnErrorsPlugin(),
		// Moves files
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