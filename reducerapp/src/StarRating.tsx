import { useState } from "react";
type starProps = {
  totalStars: number;
  onRatingChange: (rating: number) => void;
};

export const StarRating = ({ totalStars = 5, onRatingChange }: starProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStar = (value: number) => {
    setRating(value);
    onRatingChange(value);
  };
  return (
    <div style={{ cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, index) => {
        const StarValue = index + 1;
        return (
          <span
            key={StarValue}
            onClick={() => handleStar(StarValue)}
            onMouseEnter={() => setHover(StarValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              color: StarValue <= (hover | rating) ? "#FFD700" : "#ccc",
              fontSize: "2rem",
              transition: "color 200ms",
            }}
          >
            *
          </span>
        );
      })}
    </div>
  );
};
