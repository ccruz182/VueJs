Vue.component('saludo', {
    template: '<h1>{{saludo}}</h1>',
    data() {
        return {
            saludo: 'Hola, desde componente'
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un ciclo de vida'
    },
    methods: {

    },
    computed: {
    }
})
