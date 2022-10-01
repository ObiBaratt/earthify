import { FormEvent, useState } from "react";

import { handleSignup } from "../../utils/handleSignup";

const Signup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent) => {
        console.log(email);
        e.preventDefault();

         console.log("Thanks for signing up: ", email);
         handleSignup(email);

         setEmail("");
    }

    return (
        <form id="contactForm" onSubmit={handleSubmit}>
            <input type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}></input>
            <input type="submit" value="Submit" />
    </form>
    )
}

export default Signup;
