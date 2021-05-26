import Home from './pages/home';
import Area from './pages/area';
import Services from './pages/services';

export const Routes = [
    {
        id:1,
        path:'/city/:id',
        component:Home
    },
    {
        id:2,
        path:'/city/:city/:id',
        component:Area
    },
    {
        id:3,
        path:'/services/:city/:type',
        component:Services
    },
    {
        id:4,
        path:'/services/:city/:area/:type',
        component:Services
    }
]