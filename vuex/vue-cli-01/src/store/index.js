import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 0, id: 1 },
      { nombre: 'Plátano', cantidad: 0, id: 2 },
      { nombre: 'Pera', cantidad: 0, id: 3 },
    ]
  },
  mutations: {
    aumentar(state, id) {
      state.frutas.find(fruta => fruta.id === id).cantidad++;
      state.frutas.sort(ordenar);
    },
    restablecer(state) {
      state.frutas.forEach(fruta => fruta.cantidad = 0);
    }
  },
  actions: {
  },
  modules: {
  }
})

const ordenar = (a, b) => {
  if (a.cantidad < b.cantidad) {
    return 1;
  } else if (a.cantidad === b.cantidad) {
    return 0;
  } else {
    return -1;
  }
}
