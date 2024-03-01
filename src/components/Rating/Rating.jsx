import React from "react";
import star from "../../assets/StarRating.svg";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating / 2);
  const halfFilled = rating % 2 !== 0;

  const emptyStars = 5 - filledStars - (halfFilled ? 1 : 0);

  return (
    <div className="flex items-center mt-2">
      {[...Array(filledStars)].map((_, index) => (
        <img
          key={index}
          src={star}
          alt="Filled Star"
          width="24px"
          height="24px"
          className="mr-1"
        />
      ))}

      {halfFilled && (
        <div
          style={{ position: "relative", width: "24px", height: "24px" }}
          className="mr-1 flex items-center"
        >
          <img
            src={star}
            alt="Half-filled Star"
            width="24px"
            height="24px"
            style={{
              position: "absolute",
              clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
            }}
          />
          <img
            src={star}
            alt="Empty Star"
            width="24px"
            height="24px"
            style={{
              position: "absolute",
              clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
              filter: "grayscale(1)",
            }}
          />
        </div>
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <img
          key={index}
          src={star}
          alt="Empty Star"
          width="24px"
          height="24px"
          className="mr-1"
          style={{ filter: "grayscale(1)" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
