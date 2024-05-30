import RatingItem from './rating-item';

export default function Rating() {
  function makeRatingList() {
    const ratingNumeration = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    return ratingNumeration.map((rating) => (
      <RatingItem num={rating} key={rating} />
    ));
  }

  return (
    <div className="rating">
      <div className="rating__stars">{makeRatingList()}</div>
    </div>
  );
}
