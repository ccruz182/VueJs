Vue.component('titulo', {
    template: /*html*/ `
        <div>
            <h1 class="title">Números</h1>
            <h4 class="subtitle">{{numero}}</h4>
            <hijo></hijo>

            <hr />
            <button @click="obtenerCursos" class="button is-rounded is-outlined is-danger">Obtener Cursos</button>
            <ul>
                <li v-for="curso of cursos">{{curso.nombre}}</li>
            </ul>
        </div>
    `,
    computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapActions(['obtenerCursos'])
    },
    beforeCreate() {
        // obtenerCursos();
    }
})

Vue.component('hijo', {
    template: /*html*/ `
        <div>
            <button @click="aumentar" class="button is-large is-rounded">+</button>
            <button @click="disminuir(5)" class="button is-large is-rounded">-</button>
        </div>
    `,
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir'])
    }
})

const store = new Vuex.Store({
    state: {
        numero: 0,
        cursos: []
    },
    mutations: {
        aumentar() {
            this.state.numero++;
        },
        disminuir(state, n) {
            state.numero -= n;
        },
        obtenerCursos(state, cursosAction) {
            state.cursos = [...cursosAction];
        }
    },
    actions: {
        async obtenerCursos({ commit }) {
            const data = await fetch('cursos.json');
            const cursos = await data.json();
            commit('obtenerCursos', cursos);
        }
    }
});

new Vue({
    el: '#app',
    store
})