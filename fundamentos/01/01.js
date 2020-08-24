console.log("[Log] 01.js")
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo, con Vue',
        frutas: ['Manzana', 'Pera', 'Guayaba'],
        verduras: [
            { nombre: 'Cebolla', cantidad: 10 },
            { nombre: 'Zanahoria', cantidad: 8 },
            { nombre: 'Jitomate', cantidad: 1 },
            { nombre: 'Tomate', cantidad: 0 },
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push(this.nuevaFruta);
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarVerduras() {
            this.total = 0;

            return this.verduras.map(verdura => verdura.cantidad).reduce((a, n) => a += n)
        }
    }
})
