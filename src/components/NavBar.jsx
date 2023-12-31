import logo from "../assets/img/streamlit.svg";


function NavBar({ cartState, counter }) {

    // Allow to display the component ModaleCart, which is hidden by default. 
  function openCart(item) {
    cartState(item);
  }

  return (
    <nav className="w-full border-b-2 border-tertiary-contrast sticky top-0 bg-card-background-light bg-white">
      <div className="grid grid-cols-3 items-center h-16 ">
        <div className=" ml-8 ">
          <img src={logo} alt="" className="object-cover h-12" />
        </div>
        <div className=" justify-self-center space-x-6">
          <a href="#" className="">
            Pricing
          </a>
          <a href="#" className="">
            Product
          </a>
        </div>
        <div className=" justify-self-end mr-8" onClick={() => openCart(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span>{counter}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
