import create from "zustand";
import { productList } from "../data/products";
import { CartItem } from "../types/cart";
import { Product, ProductName } from "../types/product";

// I used a string enum instead of an ID since we don't have a real database in our example
// Also I did not want to complicate things.

const initialCart: CartItem[] = [
  {
    product: productList[0],
    quantity: 1,
  },
  {
    product: productList[1],
    quantity: 1,
  },
  {
    product: productList[2],
    quantity: 1,
  },
];

const cartListStore = (set: any) => ({
  cartList: initialCart,
  addProduct: (newProduct: Product) => {
    set((state: any) => ({
      cartList: [...state.cartList, { product: newProduct, quantity: 1 }],
    }));
  },
  removeProduct: (productToRemove: ProductName) => {
    set((state: any) => ({
      cartList: [
        ...state.cartList.filter(
          (cartItem: CartItem, index: number) =>
            productToRemove !== cartItem?.product?.name
        ),
      ],
    }));
  },
});

const cartStoreInstance = create(cartListStore);

export const useCartList = () => {
  const cartList: CartItem[] = cartStoreInstance((state) => state?.cartList);

  const addProduct = cartStoreInstance((state) => state?.addProduct);
  const removeProduct = cartStoreInstance((state) => state?.removeProduct);
  return { cartList, addProduct, removeProduct };
};
