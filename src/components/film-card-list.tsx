import { useSelector } from 'react-redux';
import { MAX_DISPLAYED_FILMS } from '../const';
import { makeFakeSmallCardFilms } from '../mocks/mocks';
import SmallFilmCard from './small-film-card';
import { RootState } from '../store/store';

export default function FilmCardList() {
  const countPage = useSelector(
    (state: RootState) => state.interface.countPage
  );

  const cardFilms = makeFakeSmallCardFilms().slice(
    0,
    MAX_DISPLAYED_FILMS * countPage
  );

  return (
    <div className="catalog__films-list">
      {cardFilms.map((film) => (
        <SmallFilmCard film={film} key={film.id} />
      ))}
    </div>
  );
}
