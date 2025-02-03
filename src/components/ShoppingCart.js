import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  
  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    setTotalCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + item.price);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((i) => i.id === itemId);
      if (itemToRemove) {
        const updatedItems = prevItems
          .map((i) =>
            i.id === itemId && i.quantity > 1
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter((i) => i.quantity > 0);

        setTotalCount((prevCount) => prevCount - 1);
        setTotalPrice((prevPrice) => prevPrice - itemToRemove.price);
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Items: {totalCount}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button
        onClick={() =>
          addItemToCart({ id: 1, name: "Example Item", price: 10.0 })
        }
      >
        Add Example Item
      </button>
    </div>
  );
};

export default ShoppingCart;
