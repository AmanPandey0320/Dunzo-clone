import Home from './pages/home';
import Area from './pages/area';

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
    }
]