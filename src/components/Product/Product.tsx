import styles from "./Product.module.scss";
type Props = {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
  rating: number;
};

const Product = (props: Props) => {
  const { imageSrc, title, price, description, rating } = props;
  return (
    <article className={styles.product}>
      <section className={styles.product_picture_section}>

        <img
          src={imageSrc}
          height={65}
          width={65}
          alt="product picture"
          className={styles.product_picture}
          />
          </section>
      <main className={styles.product_mainSection}>
      
        <article className={styles.product_information}>
          <section className={styles.product_mainInformation}>
            <h1 className={styles.product_title}>{title}</h1>
            <p className={styles.product_description}>{description}</p>
          </section>
          <section className={styles.product_secondaryInformation}>
            <section className={styles.product_rating}>
              {[...Array(rating)].map((rating: number, index: number) => (
                <span>⭐</span>
              ))}
            </section>
            <b className={styles.product_price}>£ {price}</b>
          </section>
        </article>
      <button type="submit">Add to cart</button>
      </main>
    </article>
  );
};

export default Product;
