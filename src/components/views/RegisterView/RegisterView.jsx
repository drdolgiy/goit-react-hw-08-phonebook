import { useDispatch } from "react-redux";
import { useState } from "react";
import {operations} from "redux/auth/auth-operations";
// import {useFetchUsersQuery} from 'redux/Auth/registerApi'


export const RegisterView = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    // console.log(name)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const HandleChange = ({ target: {name, value} }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(operations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={HandleChange}
                    />
                </label>
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
                <button type='submit'>Register</button>
            </form>
        </div>        
    )
}