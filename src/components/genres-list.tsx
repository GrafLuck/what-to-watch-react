import { makeFakeSmallCardFilms } from '../mocks/mocks';
import { getGenres } from '../utils/utils';

export default function GenresList() {
  const genresList = getGenres(makeFakeSmallCardFilms(), 9);

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">
          All genres
        </a>
      </li>
      {genresList.map((genre: string) => (
        <li className="catalog__genres-item" key={genre}>
          <a href="#" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
