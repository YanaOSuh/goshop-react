import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/clothingSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        <button onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryBtn activeCategory' : 'categoryBtn'}>
            {category}
        </button>
    </div>)
}

export default Filter;