import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

type TFilmCardButtonsProps = {
  isAuthorization?: boolean;
  isMainPage: boolean;
  id: string;
};

export default function FilmCardButtons({
  isAuthorization,
  isMainPage,
  id,
}: TFilmCardButtonsProps) {
  function isAddReviewDisplayed() {
    if (isMainPage) {
      return false;
    }
    if (!isAuthorization) {
      return false;
    }
    return true;
  }

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width={19} height={19}>
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add" />
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
      {isAddReviewDisplayed() ? (
        <Link
          to={`${AppRoute.FILMS}/${id}/review`}
          className="btn film-card__button"
        >
          Add review
        </Link>
      ) : (
        ''
      )}
    </div>
  );
}
