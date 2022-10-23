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

const cartListStore = (
  set: any
): {
  cartList: CartItem[];
  setCartList: (newCartList: any) => void;
  addProduct: (newProduct: Product) => void;
  removeProduct: (productToRemove: ProductName) => void;
} => ({
  cartList: [],
  setCartList: (newCartList: any) => {
    set((state: any) => ({
      cartList: newCartList,
    }));
  },
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
  // getTotalPrice :(state:any)=>{} ,
  // getDiscountPrice : ,
  // getTotalPrice : ,
});

const cartStoreInstance = create(cartListStore);

export const useCartList = () => {
  const cartList: CartItem[] = cartStoreInstance((state) => state?.cartList);
  const addProduct = cartStoreInstance((state) => state?.addProduct);
  const removeProduct = cartStoreInstance((state) => state?.removeProduct);
  const setCartList = cartStoreInstance((state) => state?.setCartList);

  return { cartList, addProduct, removeProduct, setCartList };
};

export const useSubTotalPrice = () => {
  console.log("inside total price");

  const subTotal: number = cartStoreInstance((state) => {
    let price: number = 0;
    state?.cartList.map((item: CartItem) => {
      price = price + +item?.product?.price * item?.quantity;
    });
    return price;
  });
  return subTotal;
};

export const useGetMilkDiscount = () => {
  console.log("inside milk discount");
  const milkDiscount: number = cartStoreInstance((state) => {
    let discount: number = 0;
    state?.cartList.map((item: CartItem) => {
      if (item?.product?.name !== "Fresh Suiss milk") return;
      const quantity = +item?.quantity;
      const itemPrice = +item?.product?.price;
      discount = Math.floor(quantity / 4) * itemPrice;
    });
    return discount;
  });

  return milkDiscount;
};

export const useGetBreadDiscount = () => {
  console.log("inside bread discount\n-----");

  const cart = cartStoreInstance((state) => state?.cartList);

  const findButterQuantity = () => {
    const butterItem = cart.find(
      (item: CartItem) => item?.product?.name === "Butter"
    );
    return butterItem?.quantity;
  };

  const butterQuantity = findButterQuantity();
  if (butterQuantity === undefined) return 0;

  const breadItem = cart.find((item: CartItem) => 
    item.product.name === "Whole bread"
  );

  if (breadItem == undefined) return 0;

  let discount: number = 0;
  const breadQuantity = +breadItem?.quantity;
  const breadPrice = +breadItem?.product?.price;
  if (breadQuantity < 1) return 0;
  discount = Math.floor(butterQuantity / 2) * (breadPrice / 2);

  if (discount >= (breadQuantity * breadPrice)) return (discount-(breadQuantity * breadPrice));
  return discount;
};
