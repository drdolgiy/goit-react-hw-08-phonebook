import { useState } from "react";
import { useDispatch } from "react-redux";
import {operations} from "redux/auth/auth-operations";


export const LoginView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const HandleChange = ({ target: {name, value} }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
        };  

      const handleSubmit = e => {
        e.preventDefault();
        dispatch(operations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={HandleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={HandleChange}
                    />
                </label>
                <button type='submit'>Log In</button>
            </form>
        </div>        
    )
}