import React from "react";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carrousel-image">
        <img src={image} alt="" className="w-full  rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Capture <br /> Your Perfect <br /> Moment
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
        <p className="text-xl text-white">
          Nolok is a Photography and Media production agency. We provide
          creative artwork ar weddings and corp
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5   top-3/4">
        <button className="btn btn-error mr-2">Discover More</button>
        <button className="btn btn-outline btn-info">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
