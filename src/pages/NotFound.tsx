import { css } from "@emotion/css";
import { BASE_COLOR } from "../Colors";

const rootStyles = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 50,
  color: BASE_COLOR,
  height: "100vh",
});

const NotFound = () => (
  <div className={rootStyles}>
    <div>Page Not Found</div>
  </div>
);

export default NotFound;
