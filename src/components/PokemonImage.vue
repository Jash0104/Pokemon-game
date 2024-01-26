<template>
    <div class="pokemon-container">
        <img
            v-if="!showPokemon"
            :src="imgSrc"
            alt="pokemon"
            class="hidden-pokemon">
        <img
            v-else
            :src="imgSrc"
            alt="pokemon"
            class="fade-in">
    </div>

</template>
<script>
export default {
    props:{
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    // data() {
    //     // return {
    //     //     id: this.pokemonId
    //     // }
    // },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>
<style lang="css" scoped>
.pokemon-container {
height: 200px;
}

img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>