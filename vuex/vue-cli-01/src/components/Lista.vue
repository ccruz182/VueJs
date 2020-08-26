<template>
  <div class="content">
    <div class="control item" v-for="fruta of frutas" v-bind:key="fruta.id">
      <div class="tags has-addons">
        <span class="tag is-dark item-nombre span-bigger" @click="aumentar(fruta.id)">{{fruta.nombre}}</span>
        <span class="tag is-success item-cantidad span-bigger">{{fruta.cantidad}}</span>
      </div>
    </div>
    <button @click="restablecer" class="button is-rounded is-link is-outlined is-fullwidth">Restablecer</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
  },
  methods: {
      ...mapMutations(['aumentar', 'restablecer'])
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  padding: 1%;
}
.span-bigger {
  padding: 2%;
  justify-content: left;
}
.item-nombre {
  width: 90%;
}
.item-cantidad {
  width: 10%;
}
</style>