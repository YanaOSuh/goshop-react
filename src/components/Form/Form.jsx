import FormComponent from './FormComponent';
import './form.css';

function Form() {
    return (
    <FormComponent 
        labelClass="form-label"
        successMessage="Thanks for joining!"
        containerClass="form-container"
        inputClass="form-input"
        buttonText="Sign Up"
        buttonClass="form-btn"
    />
    );
}

export default Form;