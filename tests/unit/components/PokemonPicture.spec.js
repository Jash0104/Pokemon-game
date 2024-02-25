import { shallowMount } from '@vue/test-utils'
import PokemonPicture  from '@/components/PokemonImage.vue';


describe('Pokemon Image Component', () => {
    test('debe de hacer match con el snapchot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon : false
            }
        })

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de mostrar la imagen del pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon : false
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect( img1.exists() ).toBeTruthy();
        expect( img1.attributes('src') ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');

        expect( img2 ).toBe( undefined );

        expect( img1.classes('hidden-pokemon') ).toBeTruthy();
    });
    
    test('debe mostrar el pokemon si el showPokemon: true ', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon : true
            }
        })

        const img1 = wrapper.find('img')

        expect( img1.exists() ).toBeTruthy();

        expect( img1.classes('hidden-pokemon') ).toBeFalsy();
        expect( img1.classes('fade-in') ).toBeTruthy();
    });
});