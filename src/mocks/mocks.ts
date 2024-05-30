import { TFilmCard } from '../types/film-card';
import { TPromoFilmCard } from '../types/promo-film-card';
import { TReview } from '../types/review';
import { TSmallCardFilm } from '../types/small-card-film';

export function makeFakePromoFilm() : TPromoFilmCard {
  return {
    id: 'f3386213-1ddf-4179-b535-6e64512458d9',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'https://13.design.htmlacademy.pro/static/film/poster/Fantastic_Beasts.jpg',
    backgroundImage: 'https://13.design.htmlacademy.pro/static/film/background/Fantastic_Beasts.jpg',
    videoLink: 'https://13.design.htmlacademy.pro/static/film/video/matrix.mp4',
    genre: 'Fantasy',
    released: 2018,
    isFavorite: false
  };
}

export function makeFakeSmallCardFilms() : TSmallCardFilm[] {
  return [
    {
      id: 'f3386213-1ddf-4179-b535-6e64512458d9',
      name: 'Fantastic Beasts: The Crimes of Grindelwald',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Fantasy'
    },
    {
      id: '429de1d0-47b0-440a-9a42-1dc568b63626',
      name: 'Bohemian Rhapsody',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/bohemian_rhapsody.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Drama'
    },
    {
      id: 'e63dd7c3-887a-440c-9f2a-eba4f8f1eea3',
      name: 'Macbeth',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/macbeth.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Drama'
    },
    {
      id: 'eef88466-15cc-429d-8715-80626758918f',
      name: 'Aviator',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/aviator.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Drama'
    },
    {
      id: 'a9ce497a-06a7-4e0b-ad4f-5a380c808010',
      name: 'We need to talk about Kevin',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/we-need-to-talk-about-kevin.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Drama'
    },
    {
      id: 'a64209af-6483-41be-8515-a210f0e51ce1',
      name: 'What We Do in the Shadows',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/what-we-do-in-the-shadows.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Comedy'
    },
    {
      id: 'e3ca681c-d15a-442f-9017-2ec8426334fa',
      name: 'The Revenant',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/revenant.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Action'
    },
    {
      id: 'f6ffb30d-89e3-470b-9a93-c58453626fd1',
      name: 'Johnny English',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/johnny-english.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Comedy'
    },
    {
      id: 'c3cb9292-f3f3-4075-a2f9-d5a0db15d2c8',
      name: 'Shutter Island',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/shutter-island.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Thriller'
    },
    {
      id: '276f84cc-145f-4bd3-9767-c8cb7fedbb19',
      name: 'Pulp Fiction',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/pulp-fiction.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Crime'
    },
    {
      id: '2b530a02-08f8-45e2-920b-12eb0fc21c92',
      name: 'No Country for Old Men',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/no-country-for-old-men.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Crime'
    },
    {
      id: '9a1f6866-cf8b-4c14-a3ce-57734e1acb08',
      name: 'Snatch',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/snatch.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Comedy'
    },
    {
      id: 'de068a7a-4121-47c2-a7e9-87f41bec5d67',
      name: 'Moonrise Kingdom',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/moonrise-kingdom.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Adventure'
    },
    {
      id: 'c449e564-66e7-483b-90f2-51d2e5fca825',
      name: 'Seven Years in Tibet',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/seven-years-in-tibet.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Adventure'
    },
    {
      id: 'cc3fd9e5-5853-4fdf-911d-f5ef03bcdf65',
      name: 'Midnight Special',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/midnight-special.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Action'
    },
    {
      id: '247532de-ff5c-498a-9a82-febc3101737a',
      name: 'War of the Worlds',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/war-of-the-worlds.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Adventure'
    },
    {
      id: 'ea637f10-061e-4105-b287-ca0bab6f1a78',
      name: 'Dardjeeling Limited',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/dardjeeling_limited.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Adventure'
    },
    {
      id: '0bc47690-ef4d-493a-a2f9-1cc33025d690',
      name: 'Orlando',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/orlando.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Drama'
    },
    {
      id: '890d78b7-4f85-4903-931a-600bee99a082',
      name: 'Legend',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/legend.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Crime'
    },
    {
      id: '7498a8cb-fde6-4527-b3bd-6d80db630eb1',
      name: 'A Star Is Born',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/A_Star_Is_Born.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Drama'
    },
    {
      id: '0f6dcc77-9d0c-49a8-b02f-cc03abede6d5',
      name: 'Bronson',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/bronson.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Action'
    },
    {
      id: '3bd9b0d7-eb51-4def-80c1-802a54352ea6',
      name: 'Gangs of new york',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/gangs_of_new_york.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Crime'
    },
    {
      id: '9b090cae-2370-4a92-a163-9051264c17b8',
      name: 'Beach',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/beach.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Adventure'
    },
    {
      id: '6f8e6b2e-1c09-492d-8ab2-6942d4135852',
      name: 'Matrix',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/matrix.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/dog.mp4',
      genre: 'Action'
    },
    {
      id: '16a61b53-9c8b-4132-a7c7-3122fcb9d852',
      name: 'Once Upon a Time in America',
      previewImage: 'https://13.design.htmlacademy.pro/static/film/preview/Once_Upon_a_Time_in_America.jpg',
      previewVideoLink: 'https://13.design.htmlacademy.pro/static//film/video/traffic.mp4',
      genre: 'Crime'
    }
  ];
}

export function makeFakeFilm() : TFilmCard {
  return {
    id: '40b69802-9fbf-4b55-ab98-aab138e77605',
    name: 'What We Do in the Shadows',
    posterImage: 'https://13.design.htmlacademy.pro/static/film/poster/What-We-Do-in-the-Shadows.jpg',
    backgroundImage: 'https://13.design.htmlacademy.pro/static/film/background/What-We-Do-in-the-Shadows.jpg',
    backgroundColor: '#A39E81',
    videoLink: 'https://13.design.htmlacademy.pro/static/film/video/matrix.mp4',
    description: 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
    rating: 7.2,
    scoresCount: 6173,
    director: 'Jemaine Clement',
    starring: [
      'Kayvan Novak',
      'Matt Berry',
      'Natasia Demetriou'
    ],
    runTime: 30,
    genre: 'Comedy',
    released: 2019,
    isFavorite: false
  };
}

export function makeFakeReviews() : TReview[] {
  return [
    {
      id: '3d566c8c-dd21-45c0-a875-20e8f5366863',
      comment: 'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
      date: '2024-05-09T21:00:00.440Z',
      rating: 4,
      user: 'Max'
    },
    {
      id: '847232bd-0ed0-46af-9502-2a4cd6f02c0a',
      comment: 'This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.',
      date: '2024-05-06T21:00:00.440Z',
      rating: 6,
      user: 'Zak'
    }
  ];
}
