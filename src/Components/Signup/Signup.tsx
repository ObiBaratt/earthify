import { useState } from "react";

import "./Signup.css";
import signup from "../../utils/handleSignup";

const Signup = () => {
    const [email, setEmail] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

         signup(email);

         setEmail("");
         setSubmitted(true);

    }

    if (submitted) {
        return (
            <div className="thanks">
                <h1>Thank you for saving animals!</h1>
                <img src={"./imgs/thanks.webp"}  alt="turtle eating a heart shaped strawberry" />
            </div>
        )
    }
    else {
        return (
            <form id="contactForm" onSubmit={handleSubmit}>
                <input className="inputField" type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}></input>
                <input className="submitButton" type="submit" value="Signup" />
            </form>
        )
    }
}

export default Signup;
