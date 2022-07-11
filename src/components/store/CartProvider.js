import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultState = {
    items: [],
    amount: 0,
}

const actionState = (state, action) => {

    switch ( action.type ) {
        case "ADD":
            const addItem = state.items.concat(action.item)
            const amountTotal = state.amount + (action.item.amount * action.item.price)
            return {
                items: addItem,
                amount: amountTotal,
            }  
        case "DELETE":
            // const addItem = state.items.concat(action.item)
            // const amountTotal = state.amount + (action.item.amount * action.item.price)
            return {
                items: addItem,
                amount: amountTotal,
            }  
        default:
            break;
    }

    return defaultState
}


const CartProvider = props => {

    const [itemState, actionItemState] = useReducer(actionState, defaultState)

    const addItemToCartHandler = item => {
        actionItemState({type: 'ADD', item})
    }
    const removeItem = id => {
        actionItemState({type: 'DELETE', id})
    }

    const cartContext = { 
        items: itemState.items,
        totalAmoun: itemState.amount,
        addItem: addItemToCartHandler,
        removeItem: removeItem,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider