import { getPokemonById } from '../../src/js-foundation/07-async-awai';




describe('/js-foundation/07-async-awai', () => {

    test('getPokemonById should return a pokemon', async () => {

        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    })

    test('should return an error if pokemon does not exist', async () => {

        const pokemonId = 10000;
        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`pokemon not found with id ${pokemonId}`);
        }
    })
})