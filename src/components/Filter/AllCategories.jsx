import Filter from "./Filter"

const AllCategories = () => {
    return(
        <div className="categories-container">
            {['ALL', 'Dresses', 'Shorts', 'Jeans', 'Bags', 'Woman', 'Man'].
            map((category, index) => <Filter category={category} key={index} />
            )}
        </div>
    )
}

export default AllCategories;