import './style.css';

const Modal = ({ setModalOpen, children }) => {

const closeModal = e => {
    if (e.target.classList.contains('overlay')) {
        setModalOpen(false)
    }
}

    return(
        <div className='modal'>
            <div className='overlay' onClick={closeModal}>
                {children}
            </div>
        </div>
    )
}
export default Modal;