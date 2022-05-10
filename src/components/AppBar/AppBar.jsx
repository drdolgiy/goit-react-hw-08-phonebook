import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
// import { Wrapper, Nav } from "pages/HomePage/HomePageStyle.styled"

const Link = styled(NavLink)`
    &.active {
    color: tomato;
  }`;

export const AppBar = () => {
    return (
        <header>
            <div>
                <nav>
                    <Link to="/" >Home</Link >
                    <Link to="contacts" >Contacts</Link >
                    <Link to="register" >Register</Link >
                    <Link to="login" >Login</Link >
                </nav>

            </div>
            <Outlet />
        </header>
    )
};