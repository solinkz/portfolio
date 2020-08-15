import home from './home/home.vue'
import afgras from './works/afgras'
import lonux from './works/lonux'
import campustalkative from './works/campustalkative'


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
    {
        path: '/campustalkative', 
        component: campustalkative
    },
    {
        path: '/services',
        component: home
    },
    {
        path: '/portfolio',
        component: home
    },
    {
        path: '/contact',
        component: home
    }
]