type TRatingItem = {
  num: number;
  isChecked?: boolean;
};

export default function RatinqItem({ num, isChecked }: TRatingItem) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${num}`}
        type="radio"
        name="rating"
        defaultValue={num}
        defaultChecked={isChecked}
      />
      <label className="rating__label" htmlFor={`star-${num}`}>
        Rating {num}
      </label>
    </>
  );
}
