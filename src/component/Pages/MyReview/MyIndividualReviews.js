import React from "react";
import { toast } from "react-toastify";

const MyIndividualReviews = ({ rev, handleDelete }) => {
  const { _id, serviceName, title, description } = rev;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedTitle = form.title.value;
    const updatedDescription = form.description.value;

    fetch(`https://assignment-11-nolok-server.vercel.app/review/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: updatedTitle,
        description: updatedDescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("review updated");
        }
      });
  };

  return (
    <div className="mt-5">
      <div className="p-4 shadow-lg w-4/5 mx-auto rounded-lg">
        <h1 className="text-red-700 text-5xl">{serviceName}</h1>
        <div className="flex justify-between">
          <div>
            <h2 className="text-left text-2xl font-bold mt-2">{title}</h2>
            <p className="text-left">{description}</p>
          </div>

          <div className="">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error mr-2"
            >
              X
            </button>
            <a href="#my-modal-2" className="btn">
              edit
            </a>
            <div className="modal" id="my-modal-2">
              <div className="modal-box">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Type here"
                      className="input input-bordered input-success w-full max-w-xs mb-2"
                      defaultValue={title}
                    />
                    <input
                      type="text"
                      name="description"
                      placeholder="Type here"
                      className="input input-bordered input-success w-full max-w-xs mb-2"
                      defaultValue={description}
                    />
                  </div>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value=" submit"
                  />
                </form>
                <div className="modal-action">
                  <a href="#" className="btn">
                    close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIndividualReviews;
