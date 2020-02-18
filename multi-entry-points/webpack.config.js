const path = require('path'); // nos permite hacer rutas programaticas dependiende del sistema operativo.

module.exports = {
  //archivo de entrada js.
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    constacto: path.resolve(__dirname, 'src/js/contact.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), //Directorio donde quiero enviar mi archivo js final. //me retorna una ruta obsoluta de mi sistema operativo. __dirname: nos indica la carpeta actual donde estamos trabajando
    filename: 'js/[name].js', //nombre del archivo final. [name] corresponde al nombre de las keys indicadas en el objeto entry, y tambien le indico la carpeta previa a ese archivo final.
  },
};
