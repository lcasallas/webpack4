import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

console.log(data);

function App() {
	const [loaderList, setLoaderList] = useState([]);

	async function handleClick() {
		setLoaderList(data.loaders);
		const { alerta } = await import('./alert.js');
		alerta('omg, este modulo cargo dinamicamente');
	}

	return (
		<div>
			<p>
				<img src={logo} width={40} />
				<video src={video} width={360} controls poster={logo}></video>
			</p>
			<ul>
				{loaderList.map(item => (
					<Loader {...item} key={item.id} />
				))}
			</ul>
			<button onClick={handleClick}>Mostrar lo aprendido</button>
		</div>
	);
}

export default App;
