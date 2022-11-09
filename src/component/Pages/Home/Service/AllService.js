import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import AllServicesItem from "./AllServicesItem";

const AllService = () => {
  useTitle("All Service");
  const services = useLoaderData();

  return (
    <div>
      <div>
        <h1 className="text-center text-6xl text-red-700 m-10">All services</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-4/5  mx-auto">
        {services.map((service) => (
          <AllServicesItem
            key={service._id}
            service={service}
          ></AllServicesItem>
        ))}
      </div>
    </div>
  );
};

export default AllService;
