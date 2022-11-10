import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { a } from "react-router-dom";

import { AuthUserContext } from "../../../Context/UserContext";
import useTitle from "../../../Hooks/useTitle";
import ReviewComponent from "../Review/ReviewListItem";
import MyIndividualReviews from "./MyIndividualReviews";

const MyReview = () => {
  const { user } = useContext(AuthUserContext);

  useTitle("My Review");

  const [myReviews, setMyreviews] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/my_review?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
  }, [user?.email]);
  if (!myReviews) {
    return <div>nothing to see</div>;
  }
  return (
    <>
      <div>
        <h1 className="text-center font-semibold">
          my review {myReviews.length}
        </h1>
        {myReviews.map((rev) => (
          <MyIndividualReviews key={rev._id} rev={rev}></MyIndividualReviews>
        ))}
      </div>
    </>
  );
};

export default MyReview;
