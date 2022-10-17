import { CartItem as CartItemType } from "../../types/cart";
import styles from "./CartItem.module.scss";

type Props = CartItemType
const CartItem = (props:Props) => {
  const {product,quantity} = props
  return (
    <article className={styles.cartItem}>
      <section className={styles.cartItem_picture}>
        <img src={product?.imageSrc} alt="product image"></img>
      </section>
      <section className={styles.cartItem_information}>
        <h2 id={`item_${product?.name}_quantity`}>Butter</h2>
        <b>£</b>
        <section className={styles.cartItem_quantity}>
          <label htmlFor={`item_${product?.name}_quantity`}>quantity</label>
          <button type="button">-</button>
          <label htmlFor={`item_${product?.name}_quantity`}>{quantity}</label>
          <button type="button">+</button>
        </section>
      </section>
    </article>
  );
};

export default CartItem;
