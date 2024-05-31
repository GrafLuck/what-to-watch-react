import { useRef, useState } from 'react';
import { makeFakeFilm } from '../mocks/mocks';
import { useNavigate } from 'react-router-dom';
import { getFilmTimeLeft } from '../utils/utils';

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeView, setTimeView] = useState(0);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | undefined>();
  let timer = useRef<NodeJS.Timer>();
  const film = makeFakeFilm();

  async function playVideo() {
    try {
      if (videoRef?.current) {
        await videoRef.current.play();
        setIsPlaying(true);
        videoRef.current.addEventListener('ended', () => {
          setIsPlaying(false);
        });
        timer = setInterval(() => {
          if (videoRef.current) {
            setTimeView(videoRef.current?.currentTime);
          }
        }, 1000);
      }
    } catch (err) {
      setIsPlaying(false);
    }
  }

  function getTimeLeft() {
    if (videoRef.current) {
      return getFilmTimeLeft(timeView, videoRef.current.duration);
    }
  }

  const handlePlayButtonClick = () => {
    if (videoRef.current?.paused) {
      playVideo();
    } else {
      videoRef.current?.pause();
      clearInterval(timer);
      setIsPlaying(false);
    }
  };

  const handleExitPlayerButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="player">
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.posterImage}
        ref={videoRef}
      />
      <button
        type="button"
        className="player__exit"
        onClick={handleExitPlayerButtonClick}
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getTimeLeft()}</div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayButtonClick}
          >
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
          <div className="player__name">{film.name}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
