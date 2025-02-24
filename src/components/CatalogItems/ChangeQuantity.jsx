import './catalogItems.css';

const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity);
    }

    return(
        <div className="quantity-info">
            <button onClick={addQuantity} className="btn-plus-minus">+</button>
            <span className="quantity">{quantity}</span>
            <button onClick={removeQuantity} className="btn-plus-minus">-</button>
        </div>
    )
}

export default ChangeQuantity;