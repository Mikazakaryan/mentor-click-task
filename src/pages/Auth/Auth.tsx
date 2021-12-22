import Login from "./Login";
import Register from "./Register";
import { authRootStyles } from "./Styles";

const Auth = () => (
  <div className={authRootStyles}>
    <Login />
    <Register />
  </div>
);

export default Auth;
