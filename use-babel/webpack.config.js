const path = require('path'); // nos permite hacer rutas programaticas dependiende del sistema operativo.
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	//archivo de entrada js.
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',
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
				test: /\.js$/, //tipo de archivo que quiero que interprete
				use: 'babel-loader', //permite importacion.
				exclude: /node_modules/, // son los archivos que a pesar de ser JS no les aplique el loader babel.
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
		}),
	],
};
