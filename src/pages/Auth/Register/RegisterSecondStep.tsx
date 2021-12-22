import { useNavigate } from "react-router-dom";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../../store";
import { signup } from "../../../api/auth";
import { User } from "../../../types/user";
import { inputStyles, actionButtonStyles } from "../styles";

interface RegisterSecondStepProps {
  userAdditionalData: User;
  email: string;
  password: string;
  setUserAdditionalData: (changedData: { [field: string]: string }) => void;
}

const RegisterSecondStep: FC<RegisterSecondStepProps> = ({
  userAdditionalData,
  email,
  password,
  setUserAdditionalData,
}) => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();

  const onRegisterClick = useCallback(async () => {
    const user = await signup({ ...userAdditionalData, email, password });
    dispatch.user.setUser(user);
    navigate("/matches");
  }, [navigate, dispatch, userAdditionalData, email, password]);

  return (
    <>
      <input
        className={inputStyles}
        value={userAdditionalData.first_name}
        onChange={({ target: { value } }) =>
          setUserAdditionalData({ first_name: value })
        }
        placeholder="First Name"
      />
      <input
        className={inputStyles}
        value={userAdditionalData.last_name}
        onChange={({ target: { value } }) =>
          setUserAdditionalData({ last_name: value })
        }
        placeholder="Last Name"
      />
      <input
        className={inputStyles}
        value={userAdditionalData.country}
        onChange={({ target: { value } }) =>
          setUserAdditionalData({ country: value })
        }
        placeholder="Country"
      />
      <input
        className={inputStyles}
        value={userAdditionalData.city}
        onChange={({ target: { value } }) =>
          setUserAdditionalData({ city: value })
        }
        placeholder="City"
      />
      <input
        className={inputStyles}
        value={userAdditionalData["job title"]}
        onChange={({ target: { value } }) =>
          setUserAdditionalData({ "job title": value })
        }
        placeholder="Job Title"
      />
      <input
        className={inputStyles}
        value={userAdditionalData.department}
        onChange={({ target: { value } }) =>
          setUserAdditionalData({ department: value })
        }
        placeholder="Department"
      />
      <button className={actionButtonStyles} onClick={onRegisterClick}>
        Register
      </button>
    </>
  );
};

export default RegisterSecondStep;
