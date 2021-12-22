import { css } from "@emotion/css";
import { BASE_COLOR, ERR_COLOR, WHITE } from "../../Colors";

export const authRootStyles = css({
  display: "flex",
});

export const elementRootStyles = css({
  width: "50vw",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  alignItems: "center",
});

export const registerRootStyles = css({
  borderLeft: `1px solid ${BASE_COLOR}`,
});

export const headerStyles = css({
  fontSize: 48,
  color: BASE_COLOR,
});

export const inputStyles = css({
  width: "60%",
  height: 35,
  marginTop: 10,
  color: BASE_COLOR,
  padding: 10,
  border: `1px solid ${BASE_COLOR}`,
  "::placeholder": {
    color: BASE_COLOR,
  },
});

export const inputErrStyles = css({
  color: ERR_COLOR,
  border: `1px solid ${ERR_COLOR}`,
  "::placeholder": {
    color: ERR_COLOR,
  },
});

export const actionButtonStyles = css({
  width: "15%",
  height: 30,
  backgroundColor: BASE_COLOR,
  marginTop: 10,
  color: WHITE,
});

export const errText = css({
  color: ERR_COLOR,
});
