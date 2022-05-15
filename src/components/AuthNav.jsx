import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";


const Link = styled(NavLink)`
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
