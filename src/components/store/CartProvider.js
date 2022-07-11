import CartContext from "./cart-context"


const CartProvider = props => {

    const addItemToCartHandler = item => {
        
    }
    const removeItem = id => {

    }

    const cartContext = { 
        items: [],
        totalAmoun: 0,
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