import { useDispatch, useSelector } from 'react-redux';
import { makeFakeSmallCardFilms } from '../mocks/mocks';
import { changeFilter } from '../store/features/filter/filter-slice';
import { getGenres } from '../utils/utils';
import { resetCountPage } from '../store/features/interface/interface-slice';
import { RootState } from '../store/store';

export default function GenresList() {
  const genresList = getGenres(makeFakeSmallCardFilms(), 9);
  const dispatch = useDispatch();
  const filterType = useSelector((state: RootState) => state.filter.filter);

  const handleFilterByGenresClick = (
    evt: React.MouseEvent<HTMLUListElement>
  ) => {
    dispatch(changeFilter(evt.target.textContent));
    dispatch(resetCountPage());
  };

  return (
    <ul className="catalog__genres-list" onClick={handleFilterByGenresClick}>
      <li
        className={
          'All genres' === filterType
            ? 'catalog__genres-item catalog__genres-item--active'
            : 'catalog__genres-item'
        }
      >
        <a href="#" className="catalog__genres-link">
          All genres
        </a>
      </li>
      {genresList.map((genre: string) => (
        <li
          className={
            genre === filterType
              ? 'catalog__genres-item catalog__genres-item--active'
              : 'catalog__genres-item'
          }
          key={genre}
        >
          <a href="#" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
