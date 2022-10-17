import { useCartList } from "../../stores/cartStore";
import Item from "../CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartList } = useCartList();
  return (
    <article className={styles.cart}>
      <header>
        <h1>CART</h1>
      </header>
      <section className={styles.cart_products}>
      {cartList && cartList.map((cartItem,index)=>{
        return <Item
        product={cartItem.product}
        quantity={cartItem.quantity}
        />
      })}

      </section>
      <footer className={styles.cart_price}>
        <section className={styles.cart_price_subtotal}>
          <h2>Subtotal</h2>
          <b></b>
        </section>

        <section className={styles.cart_price_discount}>
          <h2>Discount</h2>
          <b></b>
        </section>

        <section className={styles.cart_price_total}>
          <h2>Total</h2>
          <b></b>
        </section>
      </footer>
    </article>
  );
};

export default Cart;
