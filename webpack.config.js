const path = require('path'); // nos permite hacer rutas programaticas dependiende del sistema operativo.

module.exports = {
  entry: './index.js', //archivo de entrada js.
  // mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), //Directorio donde quiero enviar mi archivo js final. //me retorna una ruta obsoluta de mi sistema operativo. __dirname: nos indica la carpeta actual donde estamos trabajando
    filename: 'bundle.js', //nombre del archivo final.
  },
};

/*
npx webpack -> este comando por defecto busca el archivo de configuracion y ejecuta la configuracion.
  * se puede especificar el mode.
*/
