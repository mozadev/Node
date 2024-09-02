
const { http } = require('../plugins')

export const getPokemonById = async (id: number | string): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get(url)
    // const rep = await fetch(url)
    // const pokemon = await rep.json()

    // return Promise.resolve(10)

    // throw new Error('pokemon not exist')


    return pokemon.name


}
// module.exports = getPokemonById 