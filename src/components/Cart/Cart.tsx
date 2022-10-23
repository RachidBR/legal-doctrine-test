import {useMemo} from 'react'
import { useCartList, useGetBreadDiscount, useSubTotalPrice } from "../../stores/cartStore";
import Item from "../CartItem/CartItem";
import styles from "./Cart.module.scss";
import { useGetMilkDiscount } from './../../stores/cartStore';

const Cart = () => {
  const { cartList } = useCartList();
  const subTotalPrice = useSubTotalPrice();
  const milkDiscount = useGetMilkDiscount()
  const breadDiscount = useGetBreadDiscount()

  const totalDiscount = milkDiscount+breadDiscount
  const totalPrice = subTotalPrice - totalDiscount
  return (
    <article className={styles.cart}>
      <header>
        <h1>CART</h1>
      </header>
      <section className={styles.cart_products}>
        {cartList &&
          cartList.map((cartItem, index) => {
            return (
              <Item
                key={`cartItem_index_${index}`}
                product={cartItem.product}
                quantity={cartItem.quantity}
              />
            );
          })}
      </section>
      <footer className={styles.cart_price}>
        <section className={styles.cart_price_subtotal}>
          <h2>Subtotal</h2>
          <b>{subTotalPrice.toFixed(2)}</b>
        </section>

        <section className={styles.cart_price_discount}>
          <h2>Discount</h2>
          <b>{totalDiscount.toFixed(2)}</b>
        </section>

        <section className={styles.cart_price_total}>
          <h2>Total</h2>
          <b>{totalPrice.toFixed(2)}</b>
        </section>
      </footer>
    </article>
  );
};

export default Cart;
