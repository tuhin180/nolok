import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
const AllReview = ({ serviceId }) => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/review/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews, serviceId]);
  if (!reviews) {
    return <div>there is no review</div>;
  }
  return (
    <>
      {reviews.map((review) => (
        <ReviewComponent key={review._id} review={review} />
      ))}
    </>
  );
};
function ReviewComponent({ review }) {
  const { title, description, email } = review;
  return (
    <div className="text-left p-4 w-4/5  mx-auto gap-4">
      <div className="pl-4 p-4 shadow-xl mb-4">
        <small>{email}</small>
        <h1 className=" text-2xl font-bold">{title}</h1>

        <div className="flex mt-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}

export default AllReview;
