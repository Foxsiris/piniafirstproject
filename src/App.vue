<template>
    <header class="header">
      <h2>My favorite movies </h2>
    </header>
    <div class="movies" v-if="movieStore.activeTabs === 1">
        <div class="tabs">
          <button>Favotite</button>
          <button>Seach</button>
        </div>
      <h3>WachetFilms</h3>
        <Movie  v-for="movie of  movieStore.wacthedMovies"
                :key="Movie.id"
                :movie="movie"
        />
        <h3>All films {{movieStore.totalCountMovies}}</h3>
        <Movie  v-for="movie of  movieStore.movies"
               :key="Movie.id"
               :movie="movie"
        />

    </div>
    <div class="seach" v-else>
      Search
    </div>
</template>





<script setup>
import {useMovieStore} from "@/stores/MovieStore";
import Movie from "@/components/Movie.vue";

const movieStore = useMovieStore();


</script>



<style scoped>

</style>
