import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function FormComponent({ labelClass, successMessage, containerClass, inputClass, buttonClass, buttonText }) {

    const [state, handleSubmit] = useForm('mzzdgywv');
        if (state.succeeded) {
            return <p className={labelClass}>{successMessage}</p>;
        }
    return (
    <form method="POST" onSubmit={handleSubmit}>
        <div className={containerClass}>
        <div>
            <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            className={inputClass}
            />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors} 
            />
        </div>
        <div>
            <button type="submit" disabled={state.submitting} className={buttonClass}>
                {buttonText}
            </button>
        </div>
        </div>
    </form>
    );
}

export default FormComponent;