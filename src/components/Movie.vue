<template>
  <div class="movie">
    <img :src="`${movie.poster_path}`" :alt="movie.original_title">
    <div>
      <div class="movie-name">
        {{movie.original_title}} ({{movie.release_date}})
      </div>
      <span class="movie-overview">{{movie.overview}}</span>
    </div>
  </div>
  <button v-if="!movie.isWatched"> Посмотрел</button>
  <button v-else>Не посмотрел</button>
  <button>Удалить</button>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>

<style scoped>

</style>