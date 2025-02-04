import { useState } from "react";
import { data } from "../data";
import Clothes from "./Clothes";
import Buttons from "./Buttons";
import Footer from "./Footer";

function Catalog() {
    const [clothes, setClothes] = useState(data);

    return(
        <div>
        <div className="shopSection">
            <div className='cont'>
                <h2 className='back'>Free Standard Shipping</h2>
            </div>
            <Buttons setClothes={setClothes} />
            <Clothes itemsForSale={clothes} />
        </div>
        <Footer />
        </div>
    )
}

export default Catalog;