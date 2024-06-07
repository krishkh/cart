import React from "react";
import { useState, useEffect } from "react";
function ItemPage({ data }) {
  const [itemNumber, setItemNumber] = useState(0);
  const imageSrc = "icon.svg";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const number = urlParams.get("itemNumber") - 1;
    setItemNumber(number);
    setTitle(data["data"][number]["itemName"]);
    setDescription(data["data"][number]["description"]);
    setPrice(data["data"][number]["itemPrice"]);
  }, []);

  return (
    <div
      id="container"
      className="flex flex-col px-20 mt-12 bg-gray-200 rounded-lg shadow-md overflow-hidden md:flex-row md:items-center md:justify-between md:mx-auto md:max-w-2xl"
    >
      <img
        src={imageSrc}
        alt={title}
        className="h-64 object-contain border rounded-t-lg md:w-1/2"
      />
      <div className="flex  text-gray-300 flex-col justify-between p-4 md:w-1/2">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Price: {price}</p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
