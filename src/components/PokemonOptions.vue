<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" 
                :key="pokemon.id"
                @click="$emit('selection', pokemon.id)">
                {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>
<style>
ul {
    list-style-type: none;
    padding-inline-start: 0px !important
}
li {
    background-color: white;
    padding: 10px 2px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>