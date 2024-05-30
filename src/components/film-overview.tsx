import { TFilmCard } from '../types/film-card';
import { convertRatingToString, convertArrayToString } from '../utils/utils';

type TFilmOverviewProps = {
  film: TFilmCard;
};

export default function FilmOverview({ film }: TFilmOverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {convertRatingToString(film.rating)}
          </span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {film.description}
        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {convertArrayToString(film.starring)} and other
          </strong>
        </p>
      </div>
    </>
  );
}
