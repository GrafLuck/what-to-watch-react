import { TSmallCardFilm } from '../types/small-card-film';

export function getGenres(smallFilmCard: TSmallCardFilm[], maxNumber: number = smallFilmCard.length): string[] {
  const genresList = new Set<string>(smallFilmCard.map((filmcard) => filmcard.genre));
  return Array.from(genresList).slice(0, maxNumber);
}
