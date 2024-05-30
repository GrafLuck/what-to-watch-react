type TFilmCardButtonsProps = {
  isAuthorization?: boolean;
  isMainPage: boolean;
};

export default function FilmCardButtons({
  isAuthorization,
  isMainPage,
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
        <a href="add-review.html" className="btn film-card__button">
          Add review
        </a>
      ) : (
        ''
      )}
    </div>
  );
}
