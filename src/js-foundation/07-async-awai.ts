
import { httpClientPLugin as http } from '../plugins/http-client.plugin'

export const getPokemonById = async (id: number | string): Promise<string> => {


    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const pokemon = await http.get(url)
        return pokemon.name

    } catch (error) {
        throw `pokemon not found with id ${id}`;
    }

}
