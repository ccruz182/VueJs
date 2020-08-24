Vue.component('hijo', {
    template: `
    <div class="notification is-warning">
       <h5>Componente Hijo</h5>
       <h6>{{numero * numero}}</h6>
       <h6>Nombre: {{nombre}}</h6>
       <input v-model="nombre" />
    </div>
    `,
    data() {
        return { nombre: '' }
    },
    props: ['numero'],
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },
    updated() {
        this.$emit('nombreHijo', this.nombre);
    }
});