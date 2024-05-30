import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/main-page';
import FilmPage from './pages/film-page';
import { AppRoute } from './const';
import AddReviewPage from './pages/add-review-page';

const router = createBrowserRouter([
  {
    path: AppRoute.MAIN,
    element: <MainPage />,
  },
  {
    path: `${AppRoute.FILMS}/:id`,
    element: <FilmPage />,
  },
  {
    path: `${AppRoute.FILMS}/:id/review`,
    element: <AddReviewPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
