import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "redux/auth/auth-selector";
import {operations} from "redux/auth/auth-operations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUseremail);

    return (
        <div>
            <span>Wellcome, {email}</span>
            <button type="button" onClick={() => dispatch(operations.logOut())}>Log Out</button>
        </div>
    )
};