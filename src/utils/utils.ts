import { TSmallCardFilm } from '../types/small-card-film';

export function getGenres(smallFilmCard: TSmallCardFilm[], maxNumber: number = smallFilmCard.length): string[] {
  const genresList = new Set<string>(smallFilmCard.map((filmcard) => filmcard.genre));
  return Array.from(genresList).slice(0, maxNumber);
}

export function convertArrayToString(array: string[]) {
  return array.join(', ');
}

export function convertArrayToList(array: string[]) {
  return array.join(', \n');
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

export function convertMinutesToHoursAndMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const min = minutes - hours * 60;
  return (hours === 0) ? `${min}m` : `${hours}h ${min}m`;
}

export function convertData(date: Date) {
  return date;
}

export function getFilmTimeLeft(currentTime: number, duration: number) {
  const timeLeft = duration - currentTime;
  if (timeLeft < 3600) {
    const minLeft = Math.floor(timeLeft / 60);
    const secLeft = Math.floor(timeLeft - minLeft * 60);
    return `-${minLeft < 10 ? '0' : ''}${minLeft}:${secLeft < 10 ? '0' : ''}${secLeft}`;
  } else {
    const hourLeft = Math.floor(timeLeft / 3600);
    const minLeft = Math.floor((timeLeft - hourLeft * 3600) / 60);
    const secLeft = Math.floor(timeLeft - hourLeft * 3600 - minLeft * 60);
    return `-${hourLeft < 10 ? '0' : ''}${hourLeft}:${minLeft < 10 ? '0' : ''}${minLeft}:${secLeft < 10 ? '0' : ''}${secLeft}`;
  }
}
