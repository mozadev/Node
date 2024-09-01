
const getPokemonById = async(id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const rep = await fetch(url)
    const pokemon = await rep.json()

    // return Promise.resolve(10)

    // throw new Error('pokemon not exist')
    
    
    return pokemon.name
    
  
}
module.exports = getPokemonById 