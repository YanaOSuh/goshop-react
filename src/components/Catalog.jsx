import Footer from "./Footer/Footer";
import AllCategories from "./Filter/AllCategories";
import Clothes from "./CatalogItems/Clothes";

const Catalog = () => {

    return(
        <section className="catalogSection">
            <div className="shopSection">
                <div className='shopSection-container'>
                    <h2 className='shopSection-heading'>
                        Free Standard Shipping
                    </h2>
                </div>
                <AllCategories />
                <Clothes />
            </div>
            <Footer />
        </section>
    )
}

export default Catalog;