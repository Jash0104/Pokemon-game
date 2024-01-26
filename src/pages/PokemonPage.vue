<template>
    <div class="bg-dark"></div>

    <div class="fondo">
        <h1 v-if="!pokemon">Espere por favor...</h1>
        <div v-else>
            <h1 class="title">¿Quién es este Pokemón?</h1>
            <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
            <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />

            <template v-if="showAnswer" class="fade-in">
                <h2>{{ message }}</h2>
                <button type="button" @click="newGame" class="new-game-button">
                    New Game
                </button>
            </template>

        </div>
    </div>
</template>
<script>
import PokemonImage from '@/components/PokemonImage'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions.js'

export default {
    components: {
        PokemonImage,
        PokemonOptions,
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(selectedId) {
            this.showPokemon = true
            this.showAnswer = true
            this.message = this.pokemon.id === selectedId ? `Correcto, ${this.pokemon.name}` : `Terrible, el pokémon es ${this.pokemon.name}`


        },
        async newGame() {
            this.pokemonArr = []
            this.pokemon = null
            this.showPokemon = false
            this.showAnswer = false
            this.message = ''
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: -100;
    background: rgb(236,89,45);
    background: linear-gradient(246deg, rgba(236,89,45,1) 0%, rgba(234,210,48,0.42629551820728295) 100%);

}
.bg-dark {
    background-color: rgba(0, 0, 0, 0.6);
}

h1, h2 {
    margin-top: 30px;
    color: white;
    font-family: 'Anton', sans-serif;
    letter-spacing: 2px;
    font-weight: 500;
}
.new-game-button {
  margin-bottom: 20px;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  color: #d70750;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #d70750;
}

.new-game-button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #ee425e;
  box-shadow: 4px 5px 17px -4px #912626;
}

.new-game-button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #e73968;
  transform: skewX(115deg);
  z-index: -1;
  transition: width 1000ms;
}

.new-game-button:hover::before {
  width: 250%;
}

.fondo {
    position: absolute;
    inset: 0;
    /* background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(97,97,97,0.42629551820728295) 100%); */
}

</style>
