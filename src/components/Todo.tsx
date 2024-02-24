import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

const Todo = () => {
  const [name, setName] = useState<string>("");
  const [carts, setCarts] = useState<cartProp[]>([]);
  const [totalItems, setTotalitems] = useState<number>(0);

  interface cartProp {
    id: string;
    item: string;
    total: number;
    selected: boolean;
    total2: number;
  }

  function handleAddCart(cart: cartProp) {
    setCarts((prevCart: cartProp[]) => [...prevCart, cart]);
    setTotalitems((prevTotal) => prevTotal + cart.total);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newCart: cartProp = {
      id: uuid(),
      item: name,
      total: 1,
      selected: false,
      total2: 1
    };

    if (!newCart.item) return;

    // console.log(newCart);
    handleAddCart(newCart);
    setName("");
  }

  // console.log(totalItems);

  return (
    <>
      <h1> QUICK SHOPING CART</h1>
      <div className="Todo">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add an item to your list"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {carts.map((cart) => (
            <TodoItem
              cart={cart}
              key={cart.id}
              setCarts={setCarts}
              OnSetTotalItems={setTotalitems}
              onTotalChange={(newTotal) =>
                setTotalitems((prevTotal) => prevTotal + newTotal)
              }
              totalItems={totalItems}
            />
          ))}
        </ul>
      </div>
      <Footer carts={carts} totalItems={totalItems} />
    </>
  );
};

export default Todo;
