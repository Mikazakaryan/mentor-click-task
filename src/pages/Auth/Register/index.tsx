import { cx } from "@emotion/css";
import { useState } from "react";
import { Gender, User } from "../../../types/user";
import { elementRootStyles, headerStyles, registerRootStyles } from "../Styles";
import RegisterFirstStep from "./RegisterFirstStep";
import RegisterSecondStep from "./RegisterSecondStep";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAdditionalData, setUserAdditionalData] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
    gender: Gender.Other,
    department: "",
    "job title": "",
    country: "",
    city: "",
  });
  const [isAdditionalDataOpen, setIsAdditionalDataOpen] = useState(false);

  return (
    <div className={cx(elementRootStyles, registerRootStyles)}>
      <div className={headerStyles}>Register</div>
      {isAdditionalDataOpen ? (
        <RegisterSecondStep
          userAdditionalData={userAdditionalData}
          email={email}
          password={password}
          setUserAdditionalData={(changedData: { [field: string]: string }) =>
            setUserAdditionalData((user) => ({ ...user, ...changedData }))
          }
        />
      ) : (
        <RegisterFirstStep
          setIsAdditionalDataOpen={setIsAdditionalDataOpen}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
    </div>
  );
};

export default Register;
