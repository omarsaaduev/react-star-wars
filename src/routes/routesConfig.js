import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PeoplePage from "../pages/PeoplePage/PeoplePage";

export const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
         
    }
]