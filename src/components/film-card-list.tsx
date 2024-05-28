import { MAX_DISPLAYED_FILMS } from '../const';
import { makeFakeSmallCardFilms } from '../mocks/mocks';
import SmallFilmCard from './small-film-card';

export default function FilmCardList() {
  const cardFilms = makeFakeSmallCardFilms().slice(0, MAX_DISPLAYED_FILMS);
  return (
    <div className="catalog__films-list">
      {cardFilms.map((film) => (
        <SmallFilmCard film={film} key={film.id} />
      ))}
    </div>
  );
}
