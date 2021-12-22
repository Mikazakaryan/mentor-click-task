import { useNavigate } from "react-router-dom";
import { cx } from "@emotion/css";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";
import { login } from "../../api/auth";
import {
  elementRootStyles,
  headerStyles,
  errText,
  inputStyles,
  inputErrStyles,
  actionButtonStyles,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErr, setIsErr] = useState(false);
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();

  const onLoginCb = useCallback(async () => {
    if (email && password) {
      setIsErr(false);
      const user = await login({ email, password });
      dispatch.user.setUser(user);
      navigate("/matches");
    } else {
      setIsErr(true);
    }
  }, [setIsErr, navigate, dispatch, email, password]);

  return (
    <div className={elementRootStyles}>
      <div className={headerStyles}>Login</div>
      {isErr ? <div className={errText}>All fields are required</div> : null}
      <input
        className={cx(inputStyles, { [inputErrStyles]: isErr && !email })}
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="Email *"
      />
      <input
        className={cx(inputStyles, { [inputErrStyles]: isErr && !password })}
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="Password *"
      />
      <button className={actionButtonStyles} onClick={onLoginCb}>
        Login
      </button>
    </div>
  );
};

export default Login;
