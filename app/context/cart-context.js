import { createContext, useReducer, useEffect, useState } from "react";

const initialState = {
  items: [],
  totalQuantity: 0,
  isVisible: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.item;
      return {
        items: state.items.find((item) => item.id === newItem.id)
          ? state.items.map((existingItem) =>
              existingItem.id === newItem.id
                ? {
                    ...existingItem,
                    quantity: existingItem.quantity + newItem.quantity,
                  }
                : existingItem
            )
          : [...state.items, newItem],
        totalQuantity: state.totalQuantity + newItem.quantity,
        // isVisible: true,
      };
    case "REMOVE_FROM_CART":
      const itemToRemove = action.item;
      return {
        ...state,
        items: state.items.filter(
          (cartItem) => cartItem.id !== itemToRemove.id
        ),
        totalQuantity: state.totalQuantity - itemToRemove.quantity,
      };
    case "REPLACE_CART":
      return {
        ...state,
        items: [...action.items],
        totalQuantity: action.totalQuantity,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((existingItem) =>
          existingItem.id === action.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + 1,
              }
            : existingItem
        ),
        totalQuantity: state.totalQuantity + 1,
      };
    case "DECREASE_QUANTITY":
      const foundItem = state.items.find((item) => item.id === action.id);
      return {
        ...state,
        items: state.items.map((existingItem) =>
          existingItem.id === action.id
            ? {
                ...existingItem,
                quantity:
                  existingItem.quantity > 1 ? existingItem.quantity - 1 : 1,
              }
            : existingItem
        ),
        totalQuantity:
          foundItem.quantity === 1
            ? state.totalQuantity
            : state.totalQuantity - 1,
      };
    default:
      return state;
  }
};

const CartContext = createContext({
  onShowCart: () => {},
  onAddToCart: (item) => {},
  onRemoveFromCart: (item) => {},
  onIncreaseQuantity: (id) => {},
  onDecreaseQuantity: (id) => {},
  onToggleMenu: () => {},
  onClearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      handleReplaceCart(cartData);
    }
  }, []);

  useEffect(() => {
    if (cartState !== initialState) {
      localStorage.setItem("cart", JSON.stringify(cartState));
    }
  }, [cartState]);

  const handleShowCart = () => {
    dispatchCartAction({
      type: "TOGGLE_CART",
    });
  };

  const handleAddToCart = (item) => {
    dispatchCartAction({
      type: "ADD_TO_CART",
      item: item,
    });
  };

  const handleRemoveFromCart = (item) => {
    dispatchCartAction({
      type: "REMOVE_FROM_CART",
      item: item,
    });
  };

  const handleReplaceCart = (cartData) => {
    dispatchCartAction({
      type: "REPLACE_CART",
      items: cartData.items,
      totalQuantity: cartData.totalQuantity,
    });
  };

  const handleIncrease = (id) => {
    dispatchCartAction({
      type: "INCREASE_QUANTITY",
      id: id,
    });
  };

  const handleDecrease = (id) => {
    dispatchCartAction({
      type: "DECREASE_QUANTITY",
      id: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        initialState,
        cartState,
        onShowCart: handleShowCart,
        onAddToCart: handleAddToCart,
        onRemoveFromCart: handleRemoveFromCart,
        onIncreaseQuantity: handleIncrease,
        onDecreaseQuantity: handleDecrease,
        onClearCart: handleReplaceCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
