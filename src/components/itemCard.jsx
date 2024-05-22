import React from "react";
import { Link } from "react-router-dom";

function ItemCard() {
  return (
    <div className="text-gray-400 bg-gray-200 body-font flex container px-5 py-5 mx-auto">
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
            CATEGORY
          </h3>
          <h2 className="text-white title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
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
            CATEGORY
          </h3>
          <h2 className="text-white title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
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
            CATEGORY
          </h3>
          <h2 className="text-white title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
