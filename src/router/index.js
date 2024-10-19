import { createRouter, createWebHistory } from 'vue-router'; // Uvozimo potrebne funkcije iz Vue Routera
import Home from '../views/HomeView.vue'; // Importiramo Home komponentu

// Definiramo rute
const routes = [
    {
        path: '/', // Putanja za home stranicu
        name: 'Home',
        component: Home // Povezujemo putanju s Home komponentom
    },
    // tu dodamo još ruta ako triba
];

// Kreiramo router 
const router = createRouter({
    history: createWebHistory(), 
    routes // Dodajemo definirane rute
});

// Eksportamo router da ga moremo koristit u app-u
export default router;
