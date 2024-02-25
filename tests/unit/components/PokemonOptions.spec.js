import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });


    test('debe de mostrar las 4 opciones correctamente', () => {
        
        const liTags = wrapper.findAll('li');
        expect(liTags.length).toBe(4);

        liTags.map( (li, index) => {
            expect(li.text()).toBe(pokemons[index].name)
        })

    });

    test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
        const liTags = wrapper.findAll('li');
        liTags.map( (li, index) => {
            li.trigger('click');
            expect(wrapper.emitted('selection')[index]).toEqual([pokemons[index].id])
            
        })
        
    });
})