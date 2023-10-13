import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

// [].map(function (element) {
//   return element * 2;
// });

// function Chintan() {
//   let returnArray;

//   for (let index = 1; index.length < 10; index++) {
//     return index * 2;
//   }

//   return returnArray;
// }

// console.log(Chintan());

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.map((e) => {
//   return e + 5;
// });
// console.log(arr2);
