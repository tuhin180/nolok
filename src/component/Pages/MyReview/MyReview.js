import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AuthUserContext } from "../../../Context/UserContext";
import useTitle from "../../../Hooks/useTitle";
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
  //   delete system is here
  const handleDelete = (_id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/review/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("deleted succesfully");
            const remaining = myReviews.filter((review) => review._id !== _id);
            setMyreviews(remaining);
          }
        });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center font-semibold">
          my review {myReviews.length}
        </h1>
        {myReviews.map((rev) => (
          <MyIndividualReviews
            key={rev._id}
            rev={rev}
            handleDelete={handleDelete}
          ></MyIndividualReviews>
        ))}
      </div>
    </>
  );
};

export default MyReview;
