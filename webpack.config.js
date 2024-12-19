const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development", // Modo de desenvolvimento
    entry: "./src/index.ts", // Arquivo principal
    output: {
        filename: "index.js", // Nome do arquivo de saída
        path: path.resolve(__dirname, "dist") // Pasta de saída
    },
    resolve: {
    	extensions: ['.ts', '.js'],
    },
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					//'style-loader',
					'css-loader',
					'postcss-loader'
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i, // Extensões de imagem suportadas
				type: 'asset/resource', // Configuração para copiar as imagens
				generator: {
					filename: 'assets/img/[path][name][ext]', // Define a saída para imagens
				},
				include: path.resolve(__dirname, 'src'),
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],
	devServer: {
		static: [
			{ directory: path.join(__dirname, './dist') },
			{ directory: path.join(__dirname, './src/assets') },
		],
		port: 3000,
	},
};
