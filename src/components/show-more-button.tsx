import { useDispatch } from 'react-redux';
import { incrementCountPage } from '../store/features/interface/interface-slice';

export default function ShowMoreButton() {
  const dispatch = useDispatch();

  const handleShowMoreButtonClick = () => {
    dispatch(incrementCountPage());
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleShowMoreButtonClick}
      >
        Show more
      </button>
    </div>
  );
}
