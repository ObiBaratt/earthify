import { useState } from "react";

import signup from "../../utils/handleSignup";

const Signup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

         signup(email);

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
