import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Apps from './views/Apps.vue'
import Config from './views/Config.vue'
import Featured from './views/Featured.vue'
import Pin from './views/Pin.vue'
import Troubleshooting from './views/Troubleshooting.vue'
import Password from './views/Password.vue'
import Welcome from './views/Welcome.vue'
import Logout from './views/Logout.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/apps', component: Apps },
    { path: '/config', component: Config },
    { path: '/featured', component: Featured },
    { path: '/pin', component: Pin },
    { path: '/troubleshooting', component: Troubleshooting },
    { path: '/password', component: Password },
    // welcome/logout render without the Navbar and are served without auth by the server
    { path: '/welcome', component: Welcome, meta: { noNav: true } },
    { path: '/logout', component: Logout, meta: { noNav: true } },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

export default createRouter({
    history: createWebHistory('/'),
    // Reuse the existing `.active` styling for the current nav link
    linkExactActiveClass: 'active',
    routes,
})
