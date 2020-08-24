console.log("[Log] 03.js")
const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un ciclo de vida'
    },
    methods: {

    },
    computed: {
    },
    beforeCreate() {
        console.log("[04] beforeCreate");
    },
    created() {
        console.log("[04] created");
    },
    beforeMount() {
        console.log("[04] beforeMount");
    },
    mounted() {
        console.log("[04] mounted");
    },
    beforeUpdate() {
        console.log("[04] beforeUpdate");
    },
    updated() {
        console.log("[04] updated");
    },
    beforeDestroy() {
        console.log("[04] beforeDestroy");
    },
    destroyed() {
        console.log("[04] destroyed");
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
})
