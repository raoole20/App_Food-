import Modal from "../UI/Modal"
import classes from "./Cart.module.css"

const Cart = props => {


    // const cartItem =<ul className={classes['cart-item']}>{ [{id: "c1", name: "sushi", amount: 5, prince:12.99}].map( item => <li>{item.name}</li> ) }</ul>
    
    return (
        <Modal>
            {/* {cartItem} */}
            <div className={ classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.buttom}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart