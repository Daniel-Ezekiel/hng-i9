import { useState } from "react";
import { FaCheck } from 'react-icons/fa'


const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [permission, setPermission] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();        
        
        setSubmitted(true);
        if(firstName && lastName && email && message && permission){
            setSubmitted(false);
            setSuccessMessage(true);
        }

        setTimeout( () => {
            setSuccessMessage(false);
        }, 3000)

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setPermission(false);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>First name</label>
                <input  id="first_name"
                        className={firstName ? 'valid' : 'invalid'}
                        name="first name" 
                        type="text" 
                        placeholder="Enter your first name" 
                        value={firstName} 
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                {firstName && <small>This field takes in your first name</small>}
                {(submitted && !firstName) && <small className="form-field-error">Please enter a first name</small>
                }
            </div>

            <div className="form-control">
                <label>Last name</label>
                <input  id="last_name" 
                        className={lastName ? 'valid' : 'invalid'}
                        name="last name" 
                        type="text" 
                        value={lastName}
                        onChange={ (e) => setLastName(e.target.value)}
                        placeholder="Enter your last name" 
                    />
                {lastName && <small>This field takes in your last name or surname</small>}
                {(submitted && !lastName) && <small className="form-field-error">Please enter a last name</small>
                }
            </div>

            <div className="form-control">
                <label>Email</label>
                <input  id="email" 
                        className={email ? 'valid' : 'invalid'}
                        name="email" 
                        type="email" 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder="yourname@email.com" 
                    />
                {email && <small>This field takes in your email address (must contain '@')</small>}
                {(submitted && !email) && <small className="form-field-error">Please enter an email address</small>
                }
            </div>

            <div className="form-control">
                <label>Message</label>
                <textarea  id="message" 
                            className={message ? 'valid' : 'invalid'}
                            name="message" 
                            value={message}
                            onChange={ (e) => setMessage(e.target.value) }
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                        />
                {message && <small>This field takes in your message for Daniel</small>}
                {(submitted && !message) && <small className="form-field-error">Please enter a message</small>
                }
            </div>

            <div className="form-control form-control-check">
                <div>
                    <label>You agree to providing your data to Daniel Ezekiel who may contact you</label>
                    <input  id="checkbox" 
                                name="agreement" 
                                type="checkbox" 
                                checked={permission}
                                value={permission}
                                onChange={ (e) => setPermission(e.currentTarget.checked) }
                            />
                </div>
                {(submitted && !permission) && <small className="form-field-error">Please check the box to continue</small>}
            </div>

            <button  id="btn__submit" value="Send Message">Send Message</button>
            {successMessage && 
                <small className="form-success"> <FaCheck /> Message Sent Successfully</small>
            }
        </form>
    );
}

export default Form;