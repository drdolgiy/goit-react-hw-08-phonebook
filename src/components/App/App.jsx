import {  Routes, Route, } from 'react-router-dom';
import {AppBar} from '../AppBar/AppBar'
import {LoginView} from '../views/LoginView/LoginView'
import { ContactsView } from '../views/ContactsView/ContactsView'
import { RegisterView } from '../views/RegisterView/RegisterView';
import { UserMenu } from 'components/views/UserMenu/UserMenu';
import {PrivateRoute} from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { Container } from './App.styled';

export default function App() {

    return (
        <Container> 
            <Routes>
                <Route path="/" element={<AppBar/>}>
                    <Route path="contacts" element={<PrivateRoute> <ContactsView/> </PrivateRoute>  }/>
                    <Route path="register" element={ <PublicRoute restricted> <RegisterView/>  </PublicRoute> }/>
                    <Route path="login" element={ <PublicRoute restricted> <LoginView/>  </PublicRoute> }/>
                    <Route path="usermenu" element={<UserMenu />} />                
                </Route>        
            </Routes>         
        </Container>
    );    
};