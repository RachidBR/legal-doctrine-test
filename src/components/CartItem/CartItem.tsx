import { CartItem as CartItemType } from "../../types/cart";
import styles from "./CartItem.module.scss";
import { useCartList } from "./../../stores/cartStore";

type Props = CartItemType;
const CartItem = (props: Props) => {
  const { product, quantity } = props;

  const { cartList, setCartList } = useCartList();

  const handleDecreaseQuantity = () => {
    cartList.map((item) => {
      if (item.product.name !== product.name) return;
      if (item.quantity === 0) {
        return item;
      }
      item.quantity--;
      return item;
    });
    setCartList([...cartList]);
  };

  const handleIncreaseQuantity = () => {
    cartList.map((item) => {
      if (item.product.name !== product.name) return;
      item.quantity++;
      return item;
    });
    const newCartList = cartList;

    setCartList([...cartList]);
  };
  return (
    <article className={styles.cartItem}>
      <section className={styles.cartItem_picture}>
        <img src={product?.imageSrc} alt="product image"></img>
      </section>
      <section className={styles.cartItem_information}>
        <h2 id={`item_${product?.name}_quantity`}>{product?.name}</h2>
        <b>£{product.price} </b>
        <section className={styles.cartItem_quantity}>
          <label htmlFor={`item_${product?.name}_quantity`}>quantity</label>
          <button onClick={handleDecreaseQuantity} type="button">
            -
          </button>
          <label htmlFor={`item_${product?.name}_quantity`}>{quantity}</label>
          <button onClick={handleIncreaseQuantity} type="button">
            +
          </button>
        </section>
      </section>
    </article>
  );
};

export default CartItem;
