import NavBar from "./components/NavBar";
import BrandFilter from "./components/BrandFilter";
import ItemCard from "./components/ItemCard";
import ModaleCart from "./components/ModaleCart";
import { useState } from "react";

function App() {
  const [filtre, setFiltre] = useState(null);
  const [cart, setCartDisplay] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [qty, setQty] = useState(null);

  const newFiltre = (item) => {
    setFiltre(item);
  };

  const openCart = (item) => {
    setCartDisplay(item);
  };

  // There should be a way to delete this operation if it was handle directly by the component itself.
  const closeCart = (item) => {
    setCartDisplay(item);
  };

  const addToCart = (item) => {
    cartList.push(item);
    setCounter(cartList.length);
  };

  const addqty = (value) => {
    setQty(value);
  };

  const deleteItem = (index) => {
    // Not possible to modify directly Arry CartList, have to generate a new one and update cartList value
    let newTab = cartList.slice();
    newTab.splice(index, 1);
    setCartList(newTab);
    setCounter(newTab.length)
  };

  return (
    <div>
      <NavBar cartState={openCart} counter={counter} />
      <div className="flex flex-col justify-center items-center">
        <BrandFilter filtre={newFiltre} />
        <ItemCard filtre={filtre} cartList={addToCart} qty={addqty} />
      </div>
      <ModaleCart
        cart={cart}
        cartOrder={closeCart}
        cartList={cartList}
        qty={qty}
        suppr={deleteItem}
      />
    </div>
  );
}

export default App;
