import FormComponent from './FormComponent';
import './form.css';

function Newsletter() {
    return (
    <FormComponent 
        labelClass="newsletter-label"
        successMessage="Hey, trendsetter! Glad you’ve joined us."
        containerClass="newsletter-container"
        inputClass="newsletter-input"
        buttonText="Subscribe"
        buttonClass="newsletter-btn"
    />
    );
}

export default Newsletter;