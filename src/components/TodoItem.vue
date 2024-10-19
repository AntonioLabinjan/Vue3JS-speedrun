<template>
    <!-- Jedan zadatak u todo listi -->
    <li>
        <!-- Checkbox koji označava dali jezadatak završen, vezan je za "done" svojstvo u todo objektu -->
         <!-- znači, kad kliknemo ga preobrne iz true na false i obrnuto-->
        <input type="checkbox" v-model="todo.done" @change="toggle" />
        <!-- Prikazivanje naslova zadatka, primenjuje CSS klasu "done" ako je zadatak završen -->
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
        <!-- Botun koji poziva remove funkciju kad ga kliknemo -->
        <button @click="remove">Ukloni</button>
    </li>
</template>

<script>
export default {
    name: 'TodoItem', // Ime komponente koje moramo definirat ako bimo stili nekamo importat ovu komponentu (konkretno, ovu ćemo imporat u todolist.vue)
    // props skuži da prebacujemo podatke iz roditeljske u dječju komponentu (npr. iz view-a u komponentu, ili iz "veće" komponente u "manju")
    props: {
        // Primanje 1 zadatka kao objekta iz roditeljske komponente putem prop-a "todo". Znači, dohvaćamo po 1 todo iz liste u obliku objekta
        // Ovoj komponenti je todolist roditeljska komponenta (znači da todoitem ne more postojat bez todolista jer se u todolistu prikazuju todoitemsi)
        todo: Object
    },
    methods: {
        // Funkcija koja emitira neki događaj 'toggle' prema roditeljskoj(većoj) komponenti
        // kad korisnik promjeni status checkbox-a, iz ovega itema se pošalje promjena u listu
        toggle() {
            this.$emit('toggle', this.todo.id); // Emitira ID zadatka koji treba tooglirat
        },
        // Funkcija koja emitira neki događaj 'remove' prema roditeljskoj komponenti
        // kad korisnik klikne na botun za brisanje.
        remove() {
            this.$emit('remove', this.todo.id); // Emituje ID zadatka koji treba ukloniti

            // ovo gore na jednostavniji način: imamo veliku komponentu koja sadrži manju. Emit služi za poslat poruku iz veće u manju da se nešto desilo i kako veća mora reagirat na to
        }
    }
};
</script>

<style scoped>

.done {
    text-decoration: line-through; 
}
</style>
