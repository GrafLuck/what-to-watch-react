import { TReview } from '../types/review';
import { Review } from './review';

type TReviewListProps = {
  reviews: TReview[];
};

export default function ReviewsList({ reviews }: TReviewListProps) {
  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
}
