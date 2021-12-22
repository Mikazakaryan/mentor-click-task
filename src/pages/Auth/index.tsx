import Login from "./Login";
import Register from "./Register";
import { authRootStyles } from "./styles";

const Auth = () => (
  <div className={authRootStyles}>
    <Login />
    <Register />
  </div>
);

export default Auth;
