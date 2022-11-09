import React from "react";
import gallery1 from "../../../../assets/image/Gallery/10.jpg";
import gallery2 from "../../../../assets/image/Gallery/2.jpg";
import gallery3 from "../../../../assets/image/Gallery/8.jpg";
import gallery4 from "../../../../assets/image/Gallery/7.jpg";
import gallery5 from "../../../../assets/image/Gallery/6.jpg";
import gallery6 from "../../../../assets/image/Gallery/5.jpg";

const Gallery = () => {
  return (
    <div className="m-5 ">
      <div className="text-center p-2">
        <h1 className="font-bold text-4xl mb-4 text-red-700">
          Our previous Event
        </h1>
        <h1 className="text-3xl font-bolt">Our Gallery</h1>
      </div>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-5 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery6}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery5}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery4}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery3}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery2}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
