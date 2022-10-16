import React from "react";
import Product from "../Product/Product";

const ProductList = () => {
  return (
    <article className="productsList">
      <h1>Products</h1>
      <Product
        title="Whole bread"
        description="Made in Algiers and destinated to the whole world"
        price={"1.00"}
        rating={5}
        imageSrc="/assets/pictures/bread.jpg"
      />
      {/* <Product
        title="Fresh Suiss milk"
        description="Semi skimmed milk that comes straight from the alpes farmers"
        price={1.15}
        rating={5}
        imageSrc=""
      />
      <Product
        title="Butter"
        description="Produced by us to insure a high quality butter"
        price={0.8}
        rating={5}
        imageSrc=""
      /> */}
    </article>
  );
};

export default ProductList;
