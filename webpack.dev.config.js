module.exports = {
	entry: [
		__dirname + "/source/js/index",
		__dirname + "/node_modules/webpack/hot/dev-server"
	],
	output: {
		path: __dirname + "/build/",
		publicPath: "/build/",
		filename: "main.min.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: ["react-hot-loader", "babel-loader"]
			},
			{
				test: /\.json$/,
				use: "json-loader"
			},
			{
				test: /\.sass$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|otf)$/,
				exclude: /node_modules/,
				use: {
					loader: "file-loader",
					options: "[path][name].[ext]"
				}
			}
		]
	},
	devServer: {
		contentBase: "./",
		inline: true,
		hot: true
	}
};
