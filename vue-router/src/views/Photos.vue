<template>
  <div>
    <h1>Photo gallery</h1>
    <router-link
      v-for="photo of photos"
      v-bind:key="photo"
      :to="{name: 'Photos', params: {id: photo}}"
    >
      <button class="button">Go to photo {{photo}}</button>
    </router-link>
    <Photo />
    <button @click="home" class="button is-success">Home</button>
    <button @click="anterior" class="button is-rounded is-link">Anterior</button>
    <button @click="siguiente" class="button is-rounded is-primary">Siguiente</button>
  </div>
</template>

<script>
import Photo from "../components/Photo.vue";
export default {
  name: "Photos",
  components: {
    Photo,
  },
  data() {
    return {
      photos: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    anterior() {
      const id = this.$route.params.id;
      let newId = id - 1;
      if (id == this.photos[0]) {
        // return 3
        newId = this.photos.slice(-1)[0];
      }
      this.$router.push(`/photos/${newId}`);
    },
    siguiente() {
      const id = parseInt(this.$route.params.id);
      let newId = id + 1;
      if (id == this.photos.slice(-1)[0]) {
        newId = this.photos[0];
      }
      this.$router.push(`/photos/${newId}`);
    },
  },
};
</script>