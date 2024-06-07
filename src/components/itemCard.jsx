import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ data }) {
  // console.log(data);
  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full card-shadow">
      <Link className="block relative h-48 rounded overflow-hidden card-shadow">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block rounded-3xl card-shadow"
          src="https://dummyimage.com/420x260"
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {data.category}
        </h3>
        <h2 className="text-white title-font text-lg font-medium">
          {data.itemName}
        </h2>
        <p className="mt-1">{data.itemPrice}</p>
      </div>
    </div>
  );
}

export default ItemCard;
