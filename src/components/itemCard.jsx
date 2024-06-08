import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ data }) {
  // console.log(data);
  return (
    <Link
      to={`/cart/item?itemNumber=${data.itemNumber}`}
      className="lg:w-1/3 md:w-1/2 p-4 w-full card-shadow"
    >
      <div className="block relative h-48 rounded overflow-hidden ">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block rounded-3xl"
          src="https://dummyimage.com/420x260"
          // src="logoK.svg"
        />
      </div>
      <div className="mt-4">
        <h3 className="dark:text-gray-100 text-xs tracking-widest title-font mb-1">
          {data.category}
        </h3>
        <h2 className="dark:text-white title-font text-lg font-medium">
          {data.itemName}
        </h2>
        <p className="mt-1 dark:text-gray-100">{data.itemPrice}</p>
      </div>
    </Link>
  );
}

export default ItemCard;
