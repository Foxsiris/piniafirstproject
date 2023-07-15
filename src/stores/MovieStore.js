import {defineStore} from "pinia";

export const useMovieStore = defineStore('movieStore',{
    state: () => ({
        movies: [
            {
                id:1,
                original_title:'Spider-Man',
                isWatched:true,
            },
            {
                id:2,
                original_title:'Spider-Man2',
                isWatched:false,
            },

        ],
        activeTabs: 1,
    }),
    getters:{
        wacthedMovies(){
            return this.movies.filter(el => el.isWatched === true)
        },
        totalCountMovies(){
            return this.movies.length;
        }
    }
})