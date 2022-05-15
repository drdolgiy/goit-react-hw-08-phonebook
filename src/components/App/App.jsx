// import { useSelector,useDispatch } from 'react-redux';
// import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsApi';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import {  Routes, Route, } from 'react-router-dom';
import {AppBar} from '../AppBar/AppBar'
import {LoginView} from '../views/LoginView/LoginView'
import { ContactsView } from '../views/ContactsView/ContactsView'
import { RegisterView } from '../views/RegisterView/RegisterView';
import { UserMenu } from 'components/views/UserMenu/UserMenu';

// import { Form } from '../Form/Form';
// import {Filter} from '../Filter/Filter';
// import {ContactList} from '../ContactList/ContactList';
import {Container} from './App.styled'
import {PrivateRoute} from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
// import { filteredContacts } from 'redux/filterSlice';
// import { Rings } from 'react-loader-spinner';

export default function App() {

    return (
        <Container> 
            {/* <Suspense> */}
            <Routes>
                <Route path="/" element={<AppBar/>}>
                    <Route path="contacts" element={<PrivateRoute> <ContactsView/> </PrivateRoute>  }/>
                    <Route path="register" element={ <PublicRoute restricted> <RegisterView/>  </PublicRoute> }/>
                    <Route path="login" element={ <PublicRoute restricted> <LoginView/>  </PublicRoute> }/>
                    <Route path="usermenu" element={<UserMenu />} />                
                </Route>        
            </Routes>
            {/* </Suspense> */}          
        </Container>
    );    
};