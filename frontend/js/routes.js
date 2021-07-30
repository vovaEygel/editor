// import { routeService } from './services/routes.service.js'
import homePage from './pages/homePage.js'
import aboutPage from './pages/about.js'
import land from './pages/land.js'

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/land',
        component: land
    }
]
export const router = new VueRouter({ routes })