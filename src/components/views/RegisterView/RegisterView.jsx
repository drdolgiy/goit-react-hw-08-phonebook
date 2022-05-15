import { useDispatch } from "react-redux";
import { useState } from "react";
import { operations } from "redux/auth/auth-operations";
import { RegisterContainer, Input, Form, Label } from "./RegisterView.styled";



export const RegisterView = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const HandleChange = ({ target: { name, value } }) => {
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
        <RegisterContainer>
            <h1>Registration</h1>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={HandleChange}
                    />
                </Label>
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
                <button type='submit'>Register</button>
            </Form>
        </RegisterContainer>
    )
};