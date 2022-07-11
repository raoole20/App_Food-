import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultState = {
    items: [],
    amount: 0,
}

const actionState = (state, action) => {

    switch ( action.type ) {
        case "ADD":

            const existingCartItemIndex = state.items.findIndex( item => item.id === action.item.id )
            const existingCartItem = state.items[existingCartItemIndex]

            let updateItem
            let updateItems

            if( existingCartItem ) {
                updateItem = { 
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                }

                updateItems = [...state.items]
                updateItems[existingCartItemIndex] = updateItem
            } else{
                updateItems = state.items.concat(action.item)
            }

            const amountTotal = state.amount + (action.item.amount * action.item.price)
            return {
                items: updateItems,
                amount: amountTotal,
            }  
        case "DELETE":
            
            const exist = state.items.findIndex( item => item.id === action.id )
            const existingItem = state.items[exist]
            
            const updateTotalAmount = +state.amount - existingItem.price

            let updatedItems

            if( existingItem.amount === 1 ) {
                updatedItems = state.items.filter( item => {
                    return item.id !== action.id
                })
            } else{
                const updateItem = { ...existingItem, amount: existingItem.amount - 1 } 

                updatedItems = [...state.items]
                updatedItems[exist] = updateItem 
            }
            return {
                items: updatedItems,
                amount: updateTotalAmount,
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
        totalAmount: itemState.amount,
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