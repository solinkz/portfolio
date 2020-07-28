import home from './home/home.vue'
import afgras from './works/afgras'
import lonux from './works/lonux'


export const routes = [
    {
        path: '/', 
        component: home
    },
    {
        path: '/home', 
        component: home
    },
    {
        path: '/afgras', 
        component: afgras
    },
    {
        path: '/lonux', 
        component: lonux
    },
]