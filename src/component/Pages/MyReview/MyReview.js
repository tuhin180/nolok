import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AuthUserContext } from "../../../Context/UserContext";
import useTitle from "../../../Hooks/useTitle";
import MyIndividualReviews from "./MyIndividualReviews";

const MyReview = () => {
  const { user, userLogout } = useContext(AuthUserContext);
  useTitle("My Review");

  const [myReviews, setMyreviews] = useState();

  useEffect(() => {
    fetch(
      `https://assignment-11-nolok-server.vercel.app/my_review?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer${localStorage.getItem("nolok-tokon")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          userLogout();
        }
        return res.json();
      })
      .then((data) => setMyreviews(data));
  }, [user?.email]);
  if (!myReviews) {
    return <div>nothing to see</div>;
  }
  //   delete system is here
  const handleDelete = (_id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://assignment-11-nolok-server.vercel.app/review/${_id}`, {
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
