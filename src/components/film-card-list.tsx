import { useSelector } from 'react-redux';
import { makeFakeSmallCardFilms } from '../mocks/mocks';
import { RootState } from '../store/store';
import SmallFilmCard from './small-film-card';

type TFilmCardListProps = {
  filmCount: number;
};

export default function FilmCardList({ filmCount }: TFilmCardListProps) {
  const allFilms = makeFakeSmallCardFilms();
  const filterType = useSelector((state: RootState) => state.filter.filter);
  const isDefaultFilter = filterType === 'All genres';
  let cardFilms;

  if (isDefaultFilter) {
    cardFilms = allFilms.slice(0, filmCount);
  } else {
    cardFilms = allFilms
      .filter((film) => film.genre === filterType)
      .slice(0, filmCount);
  }

  return (
    <div className="catalog__films-list">
      {cardFilms.map((film) => (
        <SmallFilmCard film={film} key={film.id} />
      ))}
    </div>
  );
}
