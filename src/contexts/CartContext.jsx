import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  orderDetails: {},
  orderCompleted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "add-to-cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        orderCompleted: false,
      };
    case "change-quantity":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    case "remove-from-cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "complete-order":
      return {
        ...state,
        orderCompleted: true,
        orderDetails: { customer: action.payload, order: state.cart },
        cart: [],
      };
    default:
      throw new Error("Unknow action type");
  }
}

function CartProvider({ children }) {
  const [{ cart, orderCompleted }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const numProducts = cart.reduce((sum, product) => sum + product.quantity, 0);

  function AddToCart(product, quantity) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      dispatch({
        type: "change-quantity",
        payload: {
          id: product.id,
          quantity: existingItem.quantity + quantity,
        },
      });
      return;
    }

    const newProduct = { ...product, quantity };
    dispatch({ type: "add-to-cart", payload: newProduct });
  }

  function RemoveFromCart(product) {
    dispatch({ type: "remove-from-cart", payload: product });
  }

  function ChangeQuantity(id, quantity) {
    dispatch({ type: "change-quantity", payload: { id, quantity } });
  }

  function CompleteOrder(customer) {
    dispatch({ type: "complete-order", payload: customer });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orderCompleted,
        totalPrice,
        numProducts,
        AddToCart,
        RemoveFromCart,
        ChangeQuantity,
        CompleteOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");
  return context;
}

export { CartProvider, useCart };
