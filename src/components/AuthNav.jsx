import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";


const Link = styled(NavLink)`
    text-decoration: none;
    margin-left: 10px;
    font-weigth: 500;
    font-size: 18px;
    &.active {
    color: tomato;
  }`;

export const AuthNav = () => {

  return (
    <div>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}
