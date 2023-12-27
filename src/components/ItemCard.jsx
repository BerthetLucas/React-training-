
import { useState } from "react";
import { HOODIES } from "../assets/data/hoodies";

function ItemCard({ filtre, cartList}) {

  const hoodieList = HOODIES;
  const imgPath = "../../src/assets/img/";

  const [qty, setQty] = useState(0); 

// Selection filter 
  const filteredList = () => {
    let newTab = hoodieList.slice();
    if (filtre && filtre != "price" && filtre != "all") {
      newTab = newTab.filter((item) => item.brand === filtre);
      return newTab;
    }
    if (filtre == "price") {
      newTab = newTab.filter((item) => item.price < 100);
      return newTab;
    }
    if (filtre == "all") {
      newTab = hoodieList.slice();
      return newTab;
    }
    return newTab;
  };


  // Use of object destructuring to add the propos qty modified by the select qty
  function addToCart(item){
    let fullItem = {...item,'qty' : qty }
    cartList(fullItem) 
    console.log(fullItem)
    setQty(0)
  }

  return (
    <div>
      {filteredList().map((item, index) => (
        <div id="item-list" className="px-4" key={index}>
          <div
            id="item-card"
            className="flex w-full border-b-2 border-tertiary-contrast mt-6"
          >
            <div className="flex rounded-lg bg-card-background-light shadow-lg flex-row w-full">
              <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={imgPath + item.picture}
                alt=""
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-2xl font-bold text-neutral-800">
                  {item.name}
                  <span className="inline-block ml-4 bg-button-background  border-button-text rounded-md border-2 border-primary px-6 py-2  text-sm font-bold uppercase leading-normal text-primary ">
                    {item.price}€
                  </span>
                </h5>

                <p className="mb-4 text-base text-neutral-600">
                  {item.description}
                </p>
                <p className="text-xs text-neutral-600">
                  {item.globalStock.map((size, index) => (
                    <button
                      key={index}
                      type="button"
                      className="inline-block rounded border-2  border-tertiary-contrast border-opacity-75 px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-info "
                    >
                      {size.size}
                    </button>
                  ))}
                </p>
                <div className="flex flex-row mt-12">
                  <div className="basis-1/4 w-96">
                    QTY
                    <select onChange={(e) => setQty(parseInt(e.target.value))}>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option> 
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                  <div className="basis-1/4">
                    <button
                      type="button"
                      className="inline-block rounded border-2 bg-tertiary-contrast text-card-background-light border-button-text px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-info w-44"
                      onClick={() => addToCart(item)}
                    >
                      ADD TO CART
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="ml-2 w-6 h-6 float-right"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
