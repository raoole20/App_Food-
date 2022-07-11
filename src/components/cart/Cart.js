import { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem"

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const removeItem = id => {
    cartCtx.removeItem(id)
  } 

  const addItem = item => {
    cartCtx.addItem(item)
  }

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem 
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItem.bind(null, item.id)}
          onAdd={addItem.bind(null, item)}
         />
      ))}
    </ul>
  )

  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.buttom}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
