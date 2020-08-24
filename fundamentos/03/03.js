console.log("[Log] 03.js")
const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola mi migo',
        valorProgreso: 50
    },
    methods: {

    },
    computed: {
        claseProgreso() {
            let clase = 'is-danger';
            if (this.valorProgreso < 20) {
                clase = 'is-primary';
            } else if (this.valorProgreso < 50) {
                clase = 'is-link'
            } else if (this.valorProgreso < 70) {
                clase = 'is-success';
            } else if (this.valorProgreso < 90) {
                clase = 'is-warning'
            }

            return clase;
        }
    }
})
