import styles from "./Product.module.scss";
type Props = {
  imageSrc: string;
  name: string;
  price: string;
  description: string;
};

const Product = (props: Props) => {
  const { imageSrc, name, price, description } = props;
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
            <section className={styles.product_rating}>
                ⭐⭐⭐⭐⭐
            </section>
            <b className={styles.product_price}>£ {price}</b>
          </section>
        </article>
      <button type="submit">ADD TO CART</button>
      </main>
    </article>
  );
};

export default Product;
