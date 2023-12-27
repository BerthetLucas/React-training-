import { HOODIES } from "../assets/data/hoodies";

function BrandFilter({ filtre }) {
    const hoodieList = HOODIES;
    const newTab = [];

    for (let i = 0; i < hoodieList.length; i++) {
        newTab[i] = hoodieList[i].brand;
    }

    let tabforBrand = [...new Set(newTab)];

    function newBrand(item) {
        filtre(item)
    }

    function putReset(item) {
        filtre(item); 
    }

    function maxPrice(item) {
        filtre(item)
    }


    return (
        <div className="container mx-auto mt-4  w-2/3 bg-card-background rounded py-2">
            <div id="filters" className="px-4 mt-4 flex space-x-2 bg-white py-2">
                <span className="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem] text-black "
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

                <span className="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem]  hover:text-red-600"
                    onClick={() => maxPrice("price")}>
                    &#60;100€
                </span>
            </div>
        </div>
    );
}

export default BrandFilter;
