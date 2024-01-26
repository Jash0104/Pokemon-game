import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {
    const pokemonArr = Array.from( Array(649) )
    return pokemonArr.map( (a , index) => index +1 )
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5)
    
    const pokemons = await getPokemonsNames( mixedPokemons.slice(0,4) )
    
    return pokemons
}


const getPokemonsNames = async ( [a, b, c, d] = []) => {

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all( promiseArr )

    return [
        {name: p1.data.name, id: a},
        {name: p2.data.name, id: b},
        {name: p3.data.name, id: c},
        {name: p4.data.name, id: d},
    ]
}

export default getPokemonOptions