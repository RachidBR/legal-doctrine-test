import create from "zustand";

export type ProductName = "Bread" | "Milk" | "Butter";
export type Product = {
  name: ProductName;
  quantity: number;
};
const cartListStore = (set: any) => ({
  cartList: [],
  addProduct: (newProduct: ProductName) => {
    set((state: any) => ({
      cartList: [...state.cartList, { name: newProduct, quantity: 1 }],
    }));
  },
  removeProduct: (productToRemove: ProductName) => {
    set((state: any) => ({
      cartList: [
        ...state.cartList.filter(
          (product: Product, index: number) => productToRemove !== product?.name
        ),
      ],
    }));
  },
});

const cartStoreInstance = create(cartListStore);
export const useCartList = () => {
  const cartList: Product[] = cartStoreInstance((state) => state?.cartList);

  const addProduct = cartStoreInstance((state) => state?.addProduct);
  const removeProduct = cartStoreInstance((state) => state?.removeProduct);
  return { cartList, addProduct, removeProduct };
};
