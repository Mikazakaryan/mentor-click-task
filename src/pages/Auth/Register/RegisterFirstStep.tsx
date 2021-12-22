import { cx } from "@emotion/css";
import { FC, useState, useCallback } from "react";
import {
  errText,
  inputStyles,
  inputErrStyles,
  actionButtonStyles,
} from "../Styles";

enum ErrTypes {
  CONFIRM,
  MISSING,
}

interface RegisterFirstStepProps {
  setIsAdditionalDataOpen: (value: boolean) => void;
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const RegisterFirstStep: FC<RegisterFirstStepProps> = ({
  setIsAdditionalDataOpen,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  const [errMessage, setErrMessage] = useState<{
    type?: ErrTypes;
    message?: string;
  }>({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const onContinueClick = useCallback(() => {
    if (password !== confirmPassword) {
      setErrMessage({
        type: ErrTypes.CONFIRM,
        message: "Password and confirm password should be same",
      });
    } else if (email && password && confirmPassword) {
      setErrMessage({});
      setIsAdditionalDataOpen(true);
    } else {
      setErrMessage({
        type: ErrTypes.MISSING,
        message: "All fields are required",
      });
    }
  }, [
    setErrMessage,
    setIsAdditionalDataOpen,
    email,
    password,
    confirmPassword,
  ]);

  return (
    <>
      {!!errMessage.message ? (
        <div className={errText}>{errMessage.message}</div>
      ) : null}
      <input
        className={cx(inputStyles, {
          [inputErrStyles]: errMessage.type === ErrTypes.MISSING && !email,
        })}
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="Email *"
      />
      <input
        className={cx(inputStyles, {
          [inputErrStyles]:
            (errMessage.type === ErrTypes.MISSING && !password) ||
            errMessage.type === ErrTypes.CONFIRM,
        })}
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="Password *"
      />
      <input
        className={cx(inputStyles, {
          [inputErrStyles]:
            (errMessage.type === ErrTypes.MISSING && !confirmPassword) ||
            errMessage.type === ErrTypes.CONFIRM,
        })}
        value={confirmPassword}
        onChange={({ target: { value } }) => setConfirmPassword(value)}
        type="password"
        placeholder="Confirm Password *"
      />
      <button className={actionButtonStyles} onClick={onContinueClick}>
        Continue
      </button>
    </>
  );
};

export default RegisterFirstStep;
