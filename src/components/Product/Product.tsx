import {useState} from 'react'
import styles from "./Product.module.scss";
import { useCartList } from "./../../stores/cartStore";
import { Product as ProductType } from "../../types/product";
type Props = {
  productInformation: ProductType;
};

const Product = (props: Props) => {
  const { productInformation } = props;
  const { imageSrc, name, price, description } = productInformation;
  const { addProduct,cartList } = useCartList();
  const handleAddToCart = () => {
    if(cartList.find(item=>item?.product?.name===name)) 
    {
      // throw Error(`Product ${name} is already in the cart !`)
      return
    }
    const newProduct: ProductType = {
      name,
      description,
      imageSrc,
      price,
    };
    addProduct(newProduct);
  };
  return (
    <article className={styles.product}>
      <section className={styles.product_picture_section}>
        <img
          src={imageSrc}
          alt="product picture"
          className={styles.product_picture}
        />
      </section>
      <main className={styles.product_mainSection}>
        <article className={styles.product_information}>
          <section className={styles.product_mainInformation}>
            <h1 className={styles.product_title}>{name}</h1>
            <p className={styles.product_description}>{description}</p>
          </section>
          <section className={styles.product_secondaryInformation}>
            <section className={styles.product_rating}>⭐⭐⭐⭐⭐</section>
            <b className={styles.product_price}>£{price}</b>
          </section>
        </article>
        <button onClick={handleAddToCart} type="submit">
          ADD TO CART
        </button>
      </main>
    </article>
  );
};

export default Product;
