import React from "react";
import useTitle from "../../../Hooks/useTitle";

const AddService = () => {
  useTitle("AddService");

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productImg = form.productImg.value;
    const productPrice = form.productPrice.value;
    const productDescription = form.productDescription.value;

    console.log(productName, productImg, productPrice, productDescription);
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        price: productPrice,
        img: productImg,
        title: productName,
        details: productDescription,
      }),
    });
  };

  return (
    <div className="mt-20">
      <div>
        <h1 className="text-center text-6xl text-red-700 m-10">Add services</h1>
      </div>
      <div className="mt-10">
        <form onSubmit={handleAddService}>
          <div className=" w-1/3 mx-auto flex flex-col border shadow-xl rounded-lg p-4">
            <div className="mb-2 flex flex-col items-center">
              <label className="mb-1" htmlFor="Product_Name">
                Product Name
              </label>
              <input
                name="productName"
                className="input input-bordered input-success w-full max-w-xs"
                id="Product_Name"
                type="text"
                placeholder="Product_Name "
                required
              />
            </div>
            <div className="mb-2 flex flex-col items-center">
              <label className="mb-1" htmlFor="Product_img">
                Product Image
              </label>
              <input
                id="Product_img"
                name="productImg"
                type="text"
                placeholder="image Url"
                className="input input-bordered input-success w-full max-w-xs"
                required
              />
            </div>
            <div className="mb-2 flex flex-col items-center">
              <label className="mb-1" htmlFor="Product_Price">
                Product price
              </label>
              <input
                id="Product_Price"
                name="productPrice"
                type="number"
                placeholder="Product Price"
                className="input input-bordered input-success w-full max-w-xs"
                required
              />
            </div>

            <div className="mb-2 flex flex-col items-center">
              <label className="mb-1" htmlFor="Product_Description">
                Product Description
              </label>

              <textarea
                id="Product_Description"
                name="productDescription"
                className="textarea textarea-info w-full"
                placeholder="Product Description"
                required
              ></textarea>
            </div>
            <input
              className="btn btn-error text-white"
              type="submit"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
