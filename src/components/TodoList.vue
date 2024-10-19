<template>
    <ul>
        <!-- 
        Koristimo v-for direktivu za iteraciju kroz niz "todos". 
        Za svaki zadatak (todo) u nizu generiramo TodoItem komponentu.
        "key" je jedinstveni identifikator (id) koji Vue koristi za 
        praćenje svake komponente u iteraciji i efikasnije ažuriranje
        -->
        <TodoItem
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo" 
            @toggle="toggle" 
            @remove="remove" 
        />
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'; // Uvozimo TodoItem komponentu

export default {
    name: 'TodoList',
    components: {
        TodoItem // Registriramo TodoItem komponentu
    },
    props: {
        todos: Array // Očekujemo array todoova kao prop iz roditeljske komponente
    },
    methods: {
        // Emitiramo događaj prema roditeljskoj komponenti za prebacivanje statusa zadatka
        toggle(id) {
            this.$emit('toggle', id); 
        },
        // Emitiramo događaj prema roditeljskoj komponenti za uklanjanje zadatka
        remove(id) {
            this.$emit('remove', id); 
        }
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0; 
}
</style>
