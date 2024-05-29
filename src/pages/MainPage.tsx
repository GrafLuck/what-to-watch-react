import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilmCard from '../components/film-card';
import FilmCardList from '../components/film-card-list';
import Footer from '../components/footer';
import GenresList from '../components/genres-list';
import Header from '../components/header';
import ShowMoreButton from '../components/show-more-button';
import { RootState } from '../store/store';
import { makeFakeSmallCardFilms } from '../mocks/mocks';
import { MAX_DISPLAYED_FILMS } from '../const';

export default function MainPage() {
  const [isShowMoreButton, setIsShowMoreButton] = useState(true);
  const countFilms = makeFakeSmallCardFilms().length;

  const countPage = useSelector(
    (state: RootState) => state.interface.countPage
  );

  useEffect(() => {
    if (countFilms <= countPage * MAX_DISPLAYED_FILMS) {
      setIsShowMoreButton(false);
    }
  }, [countPage, countFilms]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <FilmCard />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmCardList />
          {isShowMoreButton ? <ShowMoreButton /> : ''}
        </section>
        <Footer />
      </div>
    </>
  );
}
