import { useState } from "react";

import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header"
import Meals from "./components/meals/Meals";
import CartProvider from "./components/store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      { cartIsShown && <Cart onHideCart={hideCartHandler}/>}

      <Header onShowCart={showCartHandler}/>

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
