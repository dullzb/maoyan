import Vue from 'vue'
import VueRouter from 'vue-router'
// import { Component } from 'react';

import Home from 'pages/Home'
import Mine from 'pages/Mine'
import Error from 'pages/Error'
import Theatre from 'pages/Theatre'
import Hot from 'pages/movies/Hot'
import Coming from 'pages/movies/Coming'
import Movie from 'pages/movies/Movie'



Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/movie'
    },
    {
        path:'/movie',
        component:Home,
        redirect:'/movie/hot',
        children:[
            {
                path:'hot',
                component:Hot,
                name:'hot'
            },{
                path:'coming',
                component:Coming,
                name:'coming'
            }
        ]
    },
    {
        path:'/theatre',
        component:Theatre
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/error',
        component:Error
    },
    {
        path:'*',
        redirect:'/error'
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router