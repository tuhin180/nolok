import React from "react";
import { useContext } from "react";
import { AuthUserContext } from "../../../Context/UserContext";

const AddReview = ({ service }) => {
  const { user } = useContext(AuthUserContext);
  console.log(user);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        email: user.email,
        serviceId: service._id,
      }),
    });
    form.reset();
  };
  return (
    <div className="mt-20">
      <form onSubmit={handleReview}>
        <div className="flex flex-col items-center">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered input-info w-full max-w-xs mb-2"
            required
          />
          <textarea
            className="textarea textarea-success w-1/2 mb-2"
            name="description"
            placeholder="Bio"
            required
          ></textarea>
        </div>

        <input className="btn btn-outline" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddReview;
