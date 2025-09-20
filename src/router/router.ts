import {createRouter,createWebHistory} from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Index from "../views/pages/index.vue"
const routes= [
    {
        path:"/",
        component:Index
    },
    {
       path:'/login',
       component:Login
    },
      {
       path:'/register',
       component:Register
    }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})
