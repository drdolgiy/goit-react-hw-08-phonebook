import { useState } from "react";
import { useDispatch } from "react-redux";
import {operations} from "redux/auth/auth-operations";
import { RegisterContainer, Form, Input, Label } from "../RegisterView/RegisterView.styled";

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
        <RegisterContainer>
            <h1>Log In</h1>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Email
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={HandleChange}
                    />
                </Label>
                <Label>
                    Password
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={HandleChange}
                    />
                </Label>
                <button type='submit'>Log In</button>
            </Form>
        </RegisterContainer>        
    )
}