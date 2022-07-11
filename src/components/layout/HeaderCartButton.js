import { useContext } from "react"

import CartIcon from "../cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../store/cart-context"


const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext)

    const numberOfCarItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCarItems}</span>
        </button>
    )
}


export default HeaderCartButton