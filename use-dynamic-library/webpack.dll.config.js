const path = require('path'); // nos permite hacer rutas programaticas dependiende del sistema operativo.
const webpack = require('webpack');

module.exports = {
	//Aqui van las dependencias core de mi producto
	entry: {
		modules: ['react', 'react-dom'],
	},
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'), //Directorio donde quiero enviar mi archivo js final. //me retorna una ruta obsoluta de mi sistema operativo. __dirname: nos indica la carpeta actual donde estamos trabajando
		filename: 'js/[name].js', //me exporta mi archivo JS con las librerias que indique anteriormente.
		library: '[name]', //es como vamos enlazar de manera global este JS con nuestro codigo
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]', //el nombre de nuestro dll
			path: path.join(__dirname, '[name]-manifest.json'),
		}),
	],
};
