import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { _id, img, price, title, details } = service;
  return (
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <PhotoProvider>
        <PhotoView src={img}>
          <img className="rounded-t-lg w-full h-60" src={img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="p-6">
        <div className="text-left">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <div className="flex">
            <span className=" -top-2 text-xl">{price}</span>
          </div>

          <p className="text-gray-700 text-base mb-4">
            {details.slice(0, 50)}...
          </p>
          <Link to={`/Service_Details/${_id}`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Details page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
