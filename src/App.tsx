import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import MainPage from './pages/main-page';
import FilmPage from './pages/film-page';
import { AppRoute } from './const';
import AddReviewPage from './pages/add-review-page';
import SignIn from './pages/sign-in-page';
import VideoPage from './pages/video-page';
import MyListPage from './pages/my-list-page';
import NotFoundPage from './pages/not-found-page/not-found-page';

const authorization = false;

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
    loader: () => (authorization ? null : redirect(AppRoute.SIGNIN)),
  },
  {
    path: AppRoute.SIGNIN,
    element: <SignIn />,
  },
  {
    path: `${AppRoute.PLAYER}/:id`,
    element: <VideoPage />,
  },
  {
    path: AppRoute.MYLIST,
    element: <MyListPage />,
    loader: () => (authorization ? null : redirect(AppRoute.SIGNIN)),
  },
  {
    path: AppRoute.ERROR,
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
