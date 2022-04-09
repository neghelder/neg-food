import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartReducer = {
  items: new Map(),
  totalPrice: 0,
  totalSize: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD") {
    let itemsMap = new Map(state.items);
    let key = action.item.name.trim();
    if (itemsMap.has(key)) {
      itemsMap.get(key).amount += action.item.amount;
    } else {
      itemsMap.set(key, action.item);
    }

    let { totalPrice, totalSize } = calcTotal(itemsMap);

    return { items: itemsMap, totalPrice, totalSize };
  }

  if (action.type === "REMOVE") {
    let itemsMap = new Map(state.items);
    itemsMap.get(action.id).amount--;

    if (itemsMap.get(action.id).amount === 0) {
      itemsMap.delete(action.id);
    }

    let { totalPrice, totalSize } = calcTotal(itemsMap);

    return { items: itemsMap, totalPrice, totalSize };
  }

  return defaultCartReducer;
}

function calcTotal(items) {
  let totalPrice, totalSize;
  totalPrice = totalSize = 0;

  Array.from(items.values()).forEach((item) => {
    totalPrice += item.price * item.amount;
    totalSize += item.amount;
  });

  return { totalSize, totalPrice: totalPrice.toFixed(2) };
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartReducer
  );

  function addItem(item) {
    if (item.target) {
      let [name, price] =
        item.target.parentNode.parentNode.innerText.split("\n");
      item = {
        id: name,
        name,
        price: parseFloat(price.replace("$", "")),
        amount: 1,
      };
    }
    if (item) {
      dispatchCartAction({ type: "ADD", item: item });
    }
  }

  function removeItem(id) {
    if (id.target) {
      let [name] = id.target.parentNode.parentNode.innerText.split("\n");
      id = name;
    }
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        totalSize: cartState.totalSize,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
