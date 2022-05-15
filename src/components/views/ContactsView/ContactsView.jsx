import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "components/Contacts/ContactList/ContactList";
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { filteredContacts } from "redux/filterSlice";
import { Form } from "components/Contacts/Form/Form";
import { Filter } from "components/Filter/Filter";
import { ContactContainer } from "./ContactsView.styled";


export const ContactsView = () => {
    const { data } = useFetchContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);

    const filteredContact = () => {
        const normalizedFilter = filter.toLowerCase();
        return data.filter(contact =>
            (contact.name.toLowerCase().includes(normalizedFilter)));
    };

    const changeFilter = event => {
        const inputValue = event.currentTarget.value;
        dispatch(filteredContacts(inputValue));
    };

    return (
        <ContactContainer>
            <Form />
            <Filter value={filter} onChange={changeFilter} />
            {data && <ContactList filteredContact={filteredContact()} deleteContact={deleteContact} />}
        </ContactContainer>
    )
}