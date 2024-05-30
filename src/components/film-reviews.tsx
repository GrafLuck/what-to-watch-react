import { TReview } from '../types/review';
import ReviewsList from './reviews-list';

type TFilmReviewsProps = {
  reviews: TReview[];
};

export default function FilmReviews({ reviews }: TFilmReviewsProps) {
  const reviewsLeft = reviews.filter((_, ind) => !(ind % 2));
  const reviewsRight = reviews.filter((_, ind) => ind % 2);
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsList reviews={reviewsLeft} />
      <ReviewsList reviews={reviewsRight} />
    </div>
  );
}
