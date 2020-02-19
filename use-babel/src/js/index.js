import '../css/index.css';
import text from './text.js';

//Aqui indico si el hot esta activo y los archivos que deseo esuchar.
if (module.hot) {
	module.hot.accept('./text.js', function() {
		console.log('recargo en caliente.');
		text();
	});
}

text();
