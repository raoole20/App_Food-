import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header"
import Meals from "./components/meals/Meals";

function App() {
  return (
    <>
      {/* portal */}
      <Cart></Cart>

      <Header />

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
