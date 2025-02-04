import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Newsletter() {
    const [state, handleSubmit] = useForm("mzzdgywv");
    if (state.succeeded) {
        return <p className='newsletter-label'>Hey, trendsetter! Glad you’ve joined us.</p>;
    }
    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className='newsletter-container'>
                <div>
                    <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your Email Address"
                    className="newsletter-input" />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors} />
                </div>
                <div>
                    <button type="submit" disabled={state.submitting} className="newsletter-btn">
                    Subscribe
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Newsletter;