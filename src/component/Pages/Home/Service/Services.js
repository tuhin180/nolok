import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="mb-10">
      {/* {<!-- title -->} */}
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4 text-red-700">
          Book Your Next Event With Us
        </h1>
        <h1 className="text-3xl font-bolt">Main Services</h1>
      </div>

      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <div className="text-left">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Card title
              </h5>
              <div className="flex">
                <FaDollarSign className="h-5" />{" "}
                <span className=" -top-2 text-xl">320</span>
              </div>

              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Link to="/">
          <button className="btn btn-outline">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
