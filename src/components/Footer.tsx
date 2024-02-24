import React from "react";

interface CartItem {
  id: string;
  item: string;
  total: number;
  selected: boolean;
}
interface FooterProp {
  carts: CartItem[];
}

const Footer: React.FC<FooterProp> = ({ carts }) => {
  const remainingItems = carts.filter((cart) => !cart.selected);
  console.log(remainingItems);
  return (
    <div className="footer">
      {remainingItems.length >= 1 ? (
        <p>You have {remainingItems.length} item(s) 🛍️ in your cart</p>
      ) : (
        <p>You don't have any item 🛒 in your cart. Add one!</p>
      )}
    </div>
  );
};

export default Footer;
