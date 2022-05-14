import { Link } from "react-router-dom";

export const AuthNav = () => {

  return (
    <div>
      <Link to="/register">Registrarion</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}
