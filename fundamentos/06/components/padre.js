Vue.component('padre', {
    template: /*html*/ `
    <div class="notification is-success">
       <h5>Componente Padre: {{numero}}</h5>
       <button class="button is-rounded is-link" @click="numero++">+</button>
       <hijo :numero="numero" @nombreHijo="nombrePadre = $event"></hijo>
       <h6>Nombre: {{nombrePadre.toUpperCase() }}</h6>
    </div>
    `,
    data() {
        return {
            numero: 5,
            nombrePadre: ''
        }
    }
});