const path = require('path'); // nos permite hacer rutas programaticas dependiende del sistema operativo.
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	//archivo de entrada js.
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
		contact: path.resolve(__dirname, 'src/js/contact.js'),
	},
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'), //Directorio donde quiero enviar mi archivo js final. //me retorna una ruta obsoluta de mi sistema operativo. __dirname: nos indica la carpeta actual donde estamos trabajando
		filename: 'js/[name].js', //nombre del archivo final. [name] corresponde al nombre de las keys indicadas en el objeto entry, y tambien le indico la carpeta previa a ese archivo final.
	},
	devServer: {
		hot: true,
		open: true, //para que se abra una tab automatica.
		port: 9000, //cambiar el puerto.
	},
	module: {
		//aqui van todos los loader.
		rules: [
			//loader's en forma de array
			{
				test: /\.css$/, //tipo de archivo que quiero que interprete
				use: [
					//el o los loader que deseo que utilice cuando encuentre un archivo con la extension anterior. " Estos loader me permite importar css en JS e inyectarlo"
					'style-loader', //inyecta. se comenta porque estamos generando el archivo css con el plugin.
					// {
					// 	loader: MiniCSSExtractPlugin.loader, //Extrae el css
					// },
					'css-loader', //permite importacion.
				],
			},
			{
				test: /\.less$/, //tipo de archivo que quiero que interprete
				use: [
					'style-loader', //inyecta. se comenta porque estamos generando el archivo css con el plugin.
					'css-loader', //permite importacion.
					'less-loader',
				],
			},
			{
				test: /\.scss$/, //tipo de archivo que quiero que interprete
				use: [
					'style-loader', //inyecta. se comenta porque estamos generando el archivo css con el plugin.
					'css-loader', //permite importacion.
					'sass-loader',
				],
			},
			{
				test: /\.styl$/, //tipo de archivo que quiero que interprete
				use: [
					'style-loader', //inyecta. se comenta porque estamos generando el archivo css con el plugin.
					'css-loader', //permite importacion.
					'stylus-loader',
				],
			},
			{
				test: /\.js$/, //tipo de archivo que quiero que interprete
				use: 'babel-loader', //permite importacion.
				exclude: /node_modules/, // son los archivos que a pesar de ser JS no les aplique el loader babel.
			},
			{
				test: /\.png|jpg|gif|woof|eot|ttf|svg|mp4|webm$/, //tipo de archivo que quiero que interprete
				use: {
					loader: 'url-loader', //permite importacion.
					options: {
						limit: 900000, //cuenta los bytes que puede tener mi archivo fuente
					},
				},
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new MiniCSSExtractPlugin({
		// 	filename: 'css/[name].css',
		// }),
		new HtmlWebpackPlugin({
			title: 'Plugins',
			template: path.resolve(__dirname, 'index.html'),
		}),
	],
	optimization: {
		//Un chunk es cada import
		splitChunks: {
			chunks: 'all', //-> a quien quiero que aplique.
			minSize: 0, //-> cual es el tamaño minimo que tienen que tener mis chunks para meterlos en mi grupo commons
			name: 'commons', //-> como quiero que se llame el modulo que voy a exportar donde voy a agrupar ese codigo que se repite en todas las paginas
		},
	},
};
