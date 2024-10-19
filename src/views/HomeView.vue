<template>
  <div>
    <h1>Todo Lista</h1>

    <p v-if="todos.length === 0">Nema zadataka</p>
    
    <!-- koristimo v-model za input. To je doslovno samo vueova sintaksa za napravit bilo kakov form-->
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Dodaj novi zadatak" />
    <!-- za svaki todo u listi definiramo da mora imat 2 botuna poli sebe, 1 za toogle, drugi za delete-->
    <TodoList :todos="todos" @toggle="toggleTodo" @remove="removeTodo" />
  </div>
</template>

<script>
// importiramo stvari iz store-a i komponentu za listu todo-ova
import { getTodos, addTodo as addTodoToStore, toggleTodo, removeTodo as removeTodoFromStore } from '../store';
import TodoList from '../components/TodoList.vue';

export default {
  name: 'Home',
  components: {
    TodoList
  },
  data() {
    return {
      newTodo: '', // Prazno polje za unos novog zadatka
      todos: [] // Započinjemo s praznim nizom zadataka
    };
  },
  mounted() {
    // Kada se komponenta montira, dohvaćamo zadatke
    this.todos = getTodos(); 
  },
  methods: {
    // Funkcija za dodavanje zadatka
    addTodo() {
      if (this.newTodo.trim()) {
        addTodoToStore(this.newTodo); // Dodajemo novi zadatak
        this.todos = getTodos(); // Ažuriramo zadatke
        this.newTodo = ''; // Resetiramo input
      }
    },
    // Funkcija za prebacivanje statusa zadatka
    toggleTodo(id) {
      toggleTodo(id); 
      this.todos = getTodos(); // Ažuriramo zadatke
    },
    // Funkcija za uklanjanje zadatka
    removeTodo(id) {
      removeTodoFromStore(id); 
      this.todos = getTodos(); // Ažuriramo zadatke
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
