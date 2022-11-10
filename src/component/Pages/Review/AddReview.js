import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthUserContext } from "../../../Context/UserContext";

const AddReview = ({ service }) => {
  const { user } = useContext(AuthUserContext);
  console.log(user);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    fetch("https://assignment-11-nolok-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        userName: user.displayName,
        email: user.email,
        userImage: user.photoURL,
        serviceName: service.title,
        serviceId: service._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledge) {
          console.log(data);
          toast.success("review is created", { autoClose: 4000 });
        }
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
            placeholder="Details"
            required
          ></textarea>
        </div>

        <input className="btn btn-outline" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddReview;
