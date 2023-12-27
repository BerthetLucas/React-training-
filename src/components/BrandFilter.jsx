import { HOODIES } from "../assets/data/hoodies";

function BrandFilter({ filtre }) {
  const hoodieList = HOODIES;
  const newTab = [];

    // First we pick every brand in the data set 
  for (let i = 0; i < hoodieList.length; i++) {
    newTab[i] = hoodieList[i].brand;
  }
  // New table generation to get only single brand and display brand button in a dynamic way. 
  let tabforBrand = [...new Set(newTab)];


// Filter by Brand
  function newBrand(item) {
    filtre(item);
  }

// Reset Filter 
  function putReset(item) {
    filtre(item);
  }

  // Filter by price < 100 €
  function maxPrice(item) {
    filtre(item);
  }

  return (
    <div className="container mx-auto mt-4  w-2/3 bg-card-background rounded py-2">
      <div id="filters" className="px-4 mt-4 flex space-x-2 bg-white py-2">
        <span
          className="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem] text-black "
          onClick={() => putReset("all")}
        >
          Reset
        </span>
        {tabforBrand.map((item, index) => (
          <span
            key={index}
            className="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem]  hover:text-red-600"
            onClick={() => newBrand(item)}
          >
            {item}
          </span>
        ))}

        <span
          className="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem]  hover:text-red-600"
          onClick={() => maxPrice("price")}
        >
          &#60;100€
        </span>
      </div>
    </div>
  );
}

export default BrandFilter;
