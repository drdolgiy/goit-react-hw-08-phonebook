import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { NavStyled } from "./AppBar/AppBar.styled";

const Link = styled(NavLink)`
    text-decoration: none;
    margin-left: 10px;
    font-weigth: 500;
    font-size: 18px;
    &.active {
    color: tomato;
  }`;

export const Navigation = () => {
  return <NavStyled>
    <Link to="/">Home</Link>
    <Link to="contacts">Contacts</Link>
  </NavStyled>
};