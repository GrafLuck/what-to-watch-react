import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FilmPage from './pages/film-page';
import { AppRoute } from './const';

const router = createBrowserRouter([
  {
    path: AppRoute.MAIN,
    element: <MainPage />,
  },
  {
    path: `${AppRoute.FILMS}/:id`,
    element: <FilmPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
