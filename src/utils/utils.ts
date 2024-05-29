import { TSmallCardFilm } from '../types/small-card-film';

export function getGenres(smallFilmCard: TSmallCardFilm[], maxNumber: number = smallFilmCard.length): string[] {
  const genresList = new Set<string>(smallFilmCard.map((filmcard) => filmcard.genre));
  return Array.from(genresList).slice(0, maxNumber);
}

export function convertArrayToString(array: string[]) {
  return array.join(', ');
}

export function convertRatingToString(rating: number) {
  const integerRating = Math.floor(rating);
  switch(integerRating){
    case 0:
    case 1:
    case 2:
      return 'Bad';
    case 3:
    case 4:
      return 'Normal';
    case 5:
    case 6:
    case 7:
      return 'Good';
    case 8:
    case 9:
      return 'Very good';
    case 10:
      return 'Awesome';
  }
}
