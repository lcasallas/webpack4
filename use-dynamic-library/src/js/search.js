async function search(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  console.log('Respuesta', response);

  const pokemon = await response.json();
  return pokemon;
}

export default search;
