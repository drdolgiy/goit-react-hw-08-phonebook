import {  Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth/auth-selector";
import { Navigation } from "components/Navigation";
import { AuthNav } from "components/AuthNav"
import {UserMenu} from "components/views/UserMenu/UserMenu"
import { AppBarStyled, Wrapper } from "components/AppBar/AppBar.styled"
import { Container } from '../App/App.styled';


export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Container>
            <AppBarStyled>
        
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            
            </AppBarStyled>
            <Wrapper><Outlet /></Wrapper>
        </Container>        
    )
};