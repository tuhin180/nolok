import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReviewComponent from "./ReviewListItem";

const AllReview = ({ serviceId }) => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch(`https://assignment-11-nolok-server.vercel.app/review/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [serviceId]);
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

export default AllReview;
