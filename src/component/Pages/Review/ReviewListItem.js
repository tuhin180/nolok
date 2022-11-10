import { FaStar } from "react-icons/fa";

function ReviewComponent({ review }) {
  const { title, userImage, description, email } = review;
  console.log(userImage);
  return (
    <div>
      <div className="text-left p-4 w-4/5  mx-auto gap-4 flex shadow-xl mb-4">
        <div className="">
          <img
            className="h-20"
            src={userImage}
            alt=""
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
          />
        </div>
        <div className="pl-4 p-4  mb-4 w-4/5">
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
    </div>
  );
}
export default ReviewComponent;
