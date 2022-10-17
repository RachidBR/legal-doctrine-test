import Product from "../Product/Product";
import styles from "./ProductList.module.scss";
import { productList } from "../../data/products";

const ProductList = () => {
  return (
    <article className={styles.productsPart}>
      <h1>Products</h1>
      <section className={styles.productList}>
        <Product {...productList[0]} />
        <Product {...productList[1]} />
        <Product {...productList[2]} />
      </section>
    </article>
  );
};

export default ProductList;
