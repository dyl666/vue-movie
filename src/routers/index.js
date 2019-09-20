import Vue from "vue"
import Router from 'vue-router'
import movieRouter from './Movie'
import mineRouter from './Mine'
import cinemaRouter from './Cinema'

Vue.use(Router)

export default new Router({
    // mode: 'history', 
    routes: [
        movieRouter,
        mineRouter,
        cinemaRouter,
        {
            path: '/*',
            redirect: movieRouter,
        }
    ]
})


