import { data } from "../data";

function Buttons({setClothes}) {

    const filteredClothes = (searchTerm) => {
        const newClothesArray = data.filter(item => item.searchTerm.includes(searchTerm))
        setClothes(newClothesArray)
    }

    return(
        <div>
            <div className='cont'>
                <button className='change' onClick={() => filteredClothes('dress')}>Dresses</button>
                <button className='change' onClick={() => filteredClothes('shorts')}>Shorts</button>
                <button className='change' onClick={() => filteredClothes('jeans')}>Jeans</button>
                <button className='change' onClick={() => filteredClothes('bag')}>Bags</button>
            </div>
            <div className='cont'>
                <button className='change' onClick={() => filteredClothes('woman')}>Woman</button>
                <button className='change' onClick={() => filteredClothes('man')}>Man</button>
                <button className='change' onClick={() => setClothes(data)}>Show All</button>
            </div>
        </div>
    )
}

export default Buttons;