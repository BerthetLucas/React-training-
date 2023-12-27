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

  // Information from BrandFilter to ItemCard to set a filter on the product Display
  const newFiltre = (item) => {
    setFiltre(item);
  };

  // Information to display ModaleCart
  const openCart = (item) => {
    setCartDisplay(item);
  };

  // There should be a way to delete this operation if it was handle directly by the component itself.
  const closeCart = (item) => {
    setCartDisplay(item);
  };

  // Inforation from ItemCard to ModaleCart to generate a table to display the cart content
  const addToCart = (item) => {
    cartList.push(item);
    setCounter(cartList.length);
  };

  // Information from ItemCard to ModaleCart to pass product quantity to the Cart 
  const addqty = (value) => {
    setQty(value);
  };

  const deleteItem = (index) => {
    // Not possible to modify directly Array CartList, have to generate a new one and update cartList value
    let newTab = cartList.slice();
    newTab.splice(index, 1);
    setCartList(newTab);
    setCounter(newTab.length);
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
