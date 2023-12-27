function ModaleCart({ cart, cartOrder, cartList, suppr }) {

  const imgPath = "../../src/assets/img/";

  // It's very likely there's another way to change cart State without send something to App.jsx
  function closeCart(item) {
    cartOrder(item);
  }
  function deleteItem(index) {
    suppr(index);
    console.log(index);
  }

  let total = () => {
    let sum = 0;
    for (let i = 0; i < cartList.length; i++) {
      sum += cartList[i].price * cartList[i].qty;
    }
    return sum;
  };

  if (cart) {
    return (
      <div
        className="fixed inset-0  bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-2/4 shadow-lg  rounded-md bg-white">
          <div className="mt-0 text-center">
            <div className="mx-auto flex items-center justify-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                VOTRE PANIER:
              </h3>
            </div>

            {cartList.map((item, index) => (
              <div className="mt-2 px-7 py-3" key={index}>
                <p className="text-sm text-gray-500">
                  <div className="p-5 border shadow-lg rounded-md bg-white text-left h-24 flex justify-start space-x-8 mb-2">
                    <img
                      className="rounded-md object-cover"
                      src={imgPath + item.picture}
                      alt="mini preview"
                    />
                    <span>{item.name}</span>
                    <span>Prix : {item.price}€</span>
                    <span>Qte : {item.qty}</span>
                    <span>TOTAL : {item.qty * item.price}€</span>
                  </div>
                  <button onClick={() => deleteItem(index)}>Delete Item</button>
                </p>
              </div>
            ))}

            <div className="items-center px-4 py-3">
              <p>Total : {total()}€</p>
              <button
                id="ok-btn"
                className="px-4 py-2 bg-tertiary-contrast text-white text-base font-medium rounded-md w-full shadow-sm hover:opacity-90"
              >
                CONFIRM COMMAND
              </button>
            </div>
            <button onClick={() => closeCart(false)}>Close Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModaleCart;
