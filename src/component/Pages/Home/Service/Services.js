import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-nolok-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-10">
      {/* {<!-- title -->} */}
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4 text-red-700">
          Book Your Next Event With Us
        </h1>
        <h1 className="text-3xl font-bolt">Main Services</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-4/5  mx-auto">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/all_service">
          <button className="btn btn-outline">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
