import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';
import { makeFakeFilm } from '../mocks/mocks';

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
  const navigate = useNavigate();
  const film = makeFakeFilm();

  function isAddReviewDisplayed() {
    if (isMainPage) {
      return false;
    }
    if (!isAuthorization) {
      return false;
    }
    return true;
  }

  const handlePlayerButtonClick = () => {
    navigate(`${AppRoute.PLAYER}/${film.id}`);
  };

  const handleAddToListButtonClick = () => {
    // добавить в список к просмотру
  };

  return (
    <div className="film-card__buttons">
      <button
        className="btn btn--play film-card__button"
        type="button"
        onClick={handlePlayerButtonClick}
      >
        <svg viewBox="0 0 19 19" width={19} height={19}>
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={handleAddToListButtonClick}
      >
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
