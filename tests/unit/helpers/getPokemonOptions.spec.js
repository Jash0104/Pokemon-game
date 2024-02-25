import getPokemonOptions, { getPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    test('Debe regresar un arreglo de números', () => {
        const pokemons = getPokemons()
        
        expect(pokemons.length).toBe(649)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[648]).toBe(649)
    })

    test('Retornar debe un array de 4 elementos con nombres de pokemons', async () => {
        const pokemons = await getPokemonsNames([1,2,3,4])
        // forEach(pokemons, (pokemon, index) => {
        //     expect(pokemon).toEqual({ name: expect.any(String), id: expect.any(Number) })
        // })

        expect( pokemons ).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])
    })

    test('getPokemonOptions debe retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
    });
})