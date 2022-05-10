// import { useState } from "react";

export const LoginView = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    return (
        <form>
            <label>
                Email
                <input/>
            </label>
            <label>
                Password
                <input/>
            </label>
            <button type='submit'>Log In</button>
        </form>
    )
}