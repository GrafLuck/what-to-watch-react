import Header from '../components/header';
import Rating from '../components/rating';
import { makeFakeFilm } from '../mocks/mocks';

export default function AddReviewPage() {
  const film = makeFakeFilm();

  return (
    <section
      className="film-card film-card--full"
      style={{ backgroundColor: film.backgroundColor }}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header isDisplayedBreadcrumbs />
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={`${film.name} poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form">
          <Rating />
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              defaultValue={''}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
