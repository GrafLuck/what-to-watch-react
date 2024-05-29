import { makeFakeSmallCardFilms } from '../mocks/mocks';
import SmallFilmCard from './small-film-card';

type TFilmCardListProps = {
  filmCount: number;
};

export default function FilmCardList({ filmCount }: TFilmCardListProps) {
  const cardFilms = makeFakeSmallCardFilms().slice(0, filmCount);

  return (
    <div className="catalog__films-list">
      {cardFilms.map((film) => (
        <SmallFilmCard film={film} key={film.id} />
      ))}
    </div>
  );
}
