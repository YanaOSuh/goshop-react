import './style.css';
import closeIcon from '../../images/closeIcon.png'
import Form from '../Form';

const Content = ({ setModalOpen }) => {
    return(
        <div className="modal-content">
            <div className="modal-cover">
                <button className='modal-btn-close' onClick={() => setModalOpen(false)}><img src={closeIcon} alt='close icon' width='32px' /></button>
                <p className='modal-text'>Sign up and get 15% off your first order!</p>
                <Form />
            </div>
        </div>
    )
}
export default Content;