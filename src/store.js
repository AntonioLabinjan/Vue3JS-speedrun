// src/store.js
// U store.js spremamo mock bazu podataka (fejk baza umisto firebasea ili mongo-a)

// array u koji će se spremat todos, svaki ima parametre id, title i done flag koji označava dal je odrađen ili ne
let todos = [
    // primjer inputa
    //{ id: 1, title: 'Ovo je testni placeholder koji će samo postojati', done: false },
];

// iz store.js-a izvozimo funkcije koje će se koristit u ostatku aplikacije

// funkcija koja dohvaća todo-ove tako da kopira niz i prikaže ga
export function getTodos() {
    return [...todos]; // Vraćamo kopiju niza(array-a) da očuvamo imutabilnost (to je ovaj niz koji smo definirali u retku 5)
}

// funkcija koja dodaje novi todo, tako da doslovno samo pusha todo u todos array i kreira id tako da doda 1 na ukupan broj todo-ova
// dakle; prvi todo ima id 1 i nakon ča smo njega dodali, duljina arraya je bila 1
// kad dodamo drugi, dohvatimo tu duljinu od 1 i zbrojimo +1, da bimo dobili id za idući todo i novu duljinu arraya
export function addTodo(title) {
    const newTodo = {
        id: todos.length + 1, 
        title,
        done: false
    };
    todos.push(newTodo);  // samo pushamo u array
}

// funkcija koja označava da je todo done ili ne
// pronalazimo pomoću id parametra koristeći find funkciju; nađemo todo po id-ju i doslovno mu flippamo todo flag
export function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) { // ako todo postoji
        todo.done = !todo.done; // iz done ga stavi na undone i obratno
    }
}

// funkcija koja miče todo iz arraya
export function removeTodo(id) {
    // nađemo odgovarajući id u array-u i maknemo ga van
    todos = todos.filter(t => t.id !== id); // Filtriramo zadatke
}
