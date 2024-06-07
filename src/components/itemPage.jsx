import React from "react";
import { useState, useEffect } from "react";
function ItemPage({ data }) {
  const [itemNumber, setItemNumber] = useState(null);
  const imageSrc = "icon.svg";
  const [title, setTitle] = useState(null);
  const description = "bla";
  const price = 2;
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const number = urlParams.get("itemNumber") - 1;
    setItemNumber(number);
    setTitle(data["data"][number]["itemName"]);
  }, []);

  return (
    <div
      id="container"
      className="flex bg-gray-200 mt-8 mx-40 text-white flex-col border rounded-lg p-4 shadow-md"
    >
      <img
        src={imageSrc}
        alt={title}
        className="h-64 object-contain border rounded-t-lg"
      />
      <div className="flex flex-col justify-between p-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Price: ${price.toFixed(2)}</p>
          {/* Add buttons or links for actions like adding to cart, etc. */}
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
