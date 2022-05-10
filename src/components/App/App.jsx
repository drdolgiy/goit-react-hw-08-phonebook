// import { useSelector,useDispatch } from 'react-redux';
// import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsApi';
import { Suspense, Routes, Route } from 'react-router-dom';
import {AppBar} from '../AppBar/AppBar'
import {LoginView} from '../views/LoginView/LoginView'
import { ContactsView } from '../views/ContactsView/ContactsView'
import { RegisterView } from '../views/RegisterView/RegisterView'

// import { Form } from '../Form/Form';
// import {Filter} from '../Filter/Filter';
// import {ContactList} from '../ContactList/ContactList';
import {Container} from './App.styled'
// import { filteredContacts } from 'redux/filterSlice';
// import { Rings } from 'react-loader-spinner';

export default function App() {
    // const { data, isFetching } = useFetchContactsQuery();
    // const [deleteContact] = useDeleteContactMutation();
    // const dispatch = useDispatch();
    // const filter = useSelector(state => state.filter.value);    

    // const filteredContact = () => {
    //     const normalizedFilter = filter.toLowerCase();
    //     return data.filter(contact =>
    //          (contact.name.toLowerCase().includes(normalizedFilter)));
    // };

    // const changeFilter = event => {
    //     const inputValue = event.currentTarget.value;
    //     dispatch(filteredContacts(inputValue));
    // };

    return (
        <Container> 
            {/* <Suspense> */}
            <Routes>
                <Route path="/" element={<AppBar/>}>
                    <Route path="contacts" element={<ContactsView/>}/>
                    <Route path="register" element={<RegisterView/>}/>
                    <Route path="login" element={<LoginView/>}/>
                </Route>        
            </Routes>
            {/* <h1>Phonebook</h1>        
            <Form/>
            <Filter value={filter} onChange={changeFilter} />
            <h2>Contacts</h2>
            {isFetching && <Rings height="60" width="60" color='black'/>}
            {data && <ContactList filteredContact={filteredContact()} deleteContact={deleteContact} />} */}
            {/* <Login/> */}
            {/* </Suspense> */}
           
        </Container>
    );    
};