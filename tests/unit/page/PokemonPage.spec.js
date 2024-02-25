import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount( PokemonPage );
    });

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        wrapper = shallowMount( PokemonPage, {
            data() {
                return { 
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot();

    });

    test('debe de llamar el mixPokemonArray al montar', () => {
        mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        shallowMount(PokemonPage);
        expect( mixPokemonArraySpy ).toHaveBeenCalled();
    });

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        wrapper = shallowMount( PokemonPage, {
            data() {
                return { 
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-image-stub');
        const options = wrapper.find('pokemon-options-stub');

        expect( picture.exists() ).toBeTruthy();
        expect( options.exists() ).toBeTruthy();

        expect( picture.attributes('pokemonid') ).toBe('1');
        expect( options.attributes('pokemons') ).toBeTruthy();

    });

    test('pruebas con checkAnswer', async () => {
        wrapper = shallowMount( PokemonPage, {
            data() {
                return { 
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect( wrapper.find('h2').exists() ).toBeTruthy();
        expect( wrapper.vm.showPokemon ).toBe(true);
        expect( wrapper.find('h2').text() ).toBe(`Correcto, ${ pokemons[0].name }`)

        await wrapper.vm.checkAnswer(2)

        expect( wrapper.vm.message ).toBe(`Terrible, el pokémon es ${ pokemons[0].name }`)

    })

})

