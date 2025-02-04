import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
    const [state, handleSubmit] = useForm("mzzdgywv");
    if (state.succeeded) {
        return <p className='form-label'>Thanks for joining!</p>;
    }
    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className='form-container'>
                <div>
                    <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your Email Address"
                    className="form-input" />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors} />
                </div>
                <div>
                    <button type="submit" disabled={state.submitting} className="form-btn">
                    Sign up
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
