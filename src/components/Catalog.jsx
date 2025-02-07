import { useState } from "react";
import { data } from "../data/data";
import Clothes from "./Clothes";
import Buttons from "./Buttons";
import Footer from "./Footer/Footer";

function Catalog() {
    const [clothes, setClothes] = useState(data);

    return(
        <section className="catalogSection">
            <div className="shopSection">
                <div className='shopSection-container'>
                    <h2 className='shopSection-heading'>
                        Free Standard Shipping
                    </h2>
                </div>
                <Buttons setClothes={setClothes} />
                <Clothes itemsForSale={clothes} />
            </div>
            <Footer />
        </section>
    )
}

export default Catalog;