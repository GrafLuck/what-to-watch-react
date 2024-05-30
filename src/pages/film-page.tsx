import { useState } from 'react';
import FilmCardList from '../components/film-card-list';
import Footer from '../components/footer';
import Header from '../components/header';
import { makeFakeFilm, makeFakeReviews } from '../mocks/mocks';
import { TFilmPageState } from '../types/film-page-state';
import FilmOverview from '../components/film-overview';
import FilmDetails from '../components/film-details';
import FilmReviews from '../components/film-reviews';
import FilmCardButtons from '../components/film-card-buttons';

export default function FilmPage() {
  const [state, setState] = useState<TFilmPageState>('Overview');
  const film = makeFakeFilm();
  const reviews = makeFakeReviews();

  return (
    <>
      <section
        className="film-card film-card--full"
        style={{ backgroundColor: film.backgroundColor }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header isDisplayedBreadcrumbs={false} />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
            </div>
            <FilmCardButtons isAuthorization isMainPage={false} id={film.id} />
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={`${film.name} poster`}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li
                    className={
                      state === 'Overview'
                        ? 'film-nav__item film-nav__item--active'
                        : 'film-nav__item '
                    }
                  >
                    <a
                      href="#"
                      className="film-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        setState('Overview');
                      }}
                    >
                      Overview
                    </a>
                  </li>
                  <li
                    className={
                      state === 'Details'
                        ? 'film-nav__item film-nav__item--active'
                        : 'film-nav__item '
                    }
                  >
                    <a
                      href="#"
                      className="film-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        setState('Details');
                      }}
                    >
                      Details
                    </a>
                  </li>
                  <li
                    className={
                      state === 'Reviews'
                        ? 'film-nav__item film-nav__item--active'
                        : 'film-nav__item '
                    }
                  >
                    <a
                      href="#"
                      className="film-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        setState('Reviews');
                      }}
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              {state === 'Overview' ? <FilmOverview film={film} /> : ''}
              {state === 'Details' ? <FilmDetails film={film} /> : ''}
              {state === 'Reviews' ? <FilmReviews reviews={reviews} /> : ''}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmCardList filmCount={4} />
        </section>
        <Footer />
      </div>
    </>
  );
}
