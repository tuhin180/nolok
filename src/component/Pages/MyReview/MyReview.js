import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { a } from "react-router-dom";

import { AuthUserContext } from "../../../Context/UserContext";
import useTitle from "../../../Hooks/useTitle";
import ReviewComponent from "../Review/ReviewListItem";

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
          <MyComments key={rev._id} comment={rev} />
        ))}
      </div>
    </>
  );
};
function MyComments({ comment }) {
  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
  };
  return (
    <>
      <div className="flex relative w-max">
        <ReviewComponent review={comment} />

        <div className="absolute top-0 right-0">
          <button className="btn btn-ghost">X</button>
          <a href="#my-modal-2" className="btn">
            edit
          </a>
          <div className="modal" id="my-modal-2">
            <div className="modal-box">
              <form onSubmit={handleEdit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Type here"
                  className="input input-bordered input-success w-full max-w-xs"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Type here"
                  className="input input-bordered input-success w-full max-w-xs"
                />
                <input
                  className="btn btn-primary"
                  type="submit"
                  value=" submit"
                />
              </form>
              <div className="modal-action">
                <a href="#" className="btn">
                  Yay!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReview;
