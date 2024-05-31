import { makeFakePromoFilm } from '../mocks/mocks';
import FilmCardButtons from './film-card-buttons';

export default function FilmCard() {
  const promoFilm = makeFakePromoFilm();

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src={promoFilm.posterImage}
            alt={`${promoFilm.name} poster`}
            width={218}
            height={327}
          />
        </div>
        <div className="film-card__desc">
          <h2 className="film-card__title">{promoFilm.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promoFilm.genre}</span>
            <span className="film-card__year">{promoFilm.released}</span>
          </p>
          <FilmCardButtons id={promoFilm.id} isMainPage />
        </div>
      </div>
    </div>
  );
}
