import { IProduct } from "@/app/types";
import Image from "next/image";
import React from "react";

const productCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {product.category}
        </span>

        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
          {product.product_name}
        </h3>

        <p className="text-xs text-gray-500">
          Brand: <span className="font-medium">{product.brand}</span>
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default productCard;
