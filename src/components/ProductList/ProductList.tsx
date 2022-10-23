import Product from "../Product/Product";
import styles from "./ProductList.module.scss";
import { productList } from "../../data/products";

const ProductList = () => {
  return (
    <article className={styles.productsPart}>
      <h1>Products</h1>
      <section className={styles.productList}>
        <Product productInformation={productList[0]} />
        <Product productInformation={productList[1]} />
        <Product productInformation={productList[2]} />
      </section>
    </article>
  );
};

export default ProductList;
