import { Link } from 'react-router-dom';
import { TSmallCardFilm } from '../types/small-card-film';
import { useRef, useState } from 'react';

type TSmallFilmCardProps = {
  film: TSmallCardFilm;
};

export default function SmallFilmCard({ film }: TSmallFilmCardProps) {
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const timeoutId = useRef<NodeJS.Timeout>();

  const handleFilmCardMouseOver = () => {
    const id = setTimeout(() => {
      setIsVideo(true);
    }, 1000);
    timeoutId.current = id;
  };

  const handleFilmCardMouseOut = () => {
    setIsVideo(false);
    clearTimeout(timeoutId.current);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={handleFilmCardMouseOver}
      onMouseOut={handleFilmCardMouseOut}
    >
      <div className="small-film-card__image">
        {!isVideo ? (
          <img
            src={film.previewImage}
            alt={film.name}
            width={280}
            height={175}
          />
        ) : (
          <video
            src={film.previewVideoLink}
            className="player__video"
            autoPlay
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
