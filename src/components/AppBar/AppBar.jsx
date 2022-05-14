// import { NavLink, Outlet } from "react-router-dom";
// import styled from "@emotion/styled";
// import { Wrapper, Nav } from "pages/HomePage/HomePageStyle.styled"
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth/auth-selector";
// import { UserMenu } from "components/UserMenu/UserMenu";
// import {LoginView} from "components/views/LoginView/LoginView"

import { Navigation } from "components/Navigation";
import { AuthNav } from "components/AuthNav"
import {UserMenu} from "components/UserMenu/UserMenu"
import {AppBarStyled} from "components/AppBar/AppBar.styled"

// const Link = styled(NavLink)`
//     &.active {
//     color: tomato;
//   }`;

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <AppBarStyled>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <Outlet />
        </AppBarStyled>
    )
};