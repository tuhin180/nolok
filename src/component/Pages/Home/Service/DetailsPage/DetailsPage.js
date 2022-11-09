import React from "react";
import { useLoaderData } from "react-router-dom";
import AllReview from "../../../Review/AllReview";
import AddReview from "../../../Review/AddReview";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const DetailsPage = () => {
  const service = useLoaderData();
  const { _id, img, title, details, price, rating } = service;

  return (
    <div>
      <div>
        <h1 className="text-center text-5xl text-red-700">Service Details</h1>
      </div>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src={img}
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>

            <div className="sticky top-0">
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Book Now
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{title}</h1>

                  <p className="mt-0.5 text-sm">Highest Rated Product</p>

                  <div className="mt-2 -ml-0.5 flex">
                    {new Array(rating).fill(0).map((r, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>

                <p className="text-lg font-bold">{price}</p>
              </div>

              <details className="group relative mt-4">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>{details}</p>
                    </div>

                    <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div className="prose max-w-none pb-6">
                  <p>{details}</p>

                  <p>{details}</p>
                </div>
              </details>

              <button className="mt-20 btn bnt-outline">Book now</button>
            </div>
          </div>
        </div>
      </section>
      <AddReview service={service}></AddReview>
      <AllReview serviceId={_id}></AllReview>
    </div>
  );
};

export default DetailsPage;
