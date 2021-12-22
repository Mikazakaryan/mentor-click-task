import { css } from "@emotion/css";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import Matches from "./Matches";
import { BASE_COLOR, WHITE } from "../Colors";

const editButtonStyles = css({
  height: 40,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: BASE_COLOR,
  color: WHITE,
});
const labelStyles = css({
  fontWeight: "bold",
});
const userRowStyles = css({
  fontSize: 20,
});

const Profile = () => {
  const matches = useSelector((state: RootState) => state.matches);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const onEditMatches = useCallback(() => {
    navigate("/matches");
  }, [navigate]);

  return (
    <div>
      <div className={userRowStyles}>
        <span className={labelStyles}>First name:</span>
        {` ${user.first_name}`}
      </div>
      <div className={userRowStyles}>
        <span className={labelStyles}>Last name:</span>
        {` ${user.last_name}`}
      </div>
      <div className={userRowStyles}>
        <span className={labelStyles}>Email:</span>
        {` ${user.email}`}
      </div>
      <div className={userRowStyles}>
        <span className={labelStyles}>Gender:</span>
        {` ${user.gender}`}
      </div>
      <div className={userRowStyles}>
        <span className={labelStyles}>Department:</span>
        {` ${user.department}`}
      </div>
      <div className={userRowStyles}>
        <span className={labelStyles}>Job title:</span>
        {` ${user["job title"]}`}
      </div>
      <div className={userRowStyles}>
        <span className={labelStyles}>Country:</span>
        {` ${user.country}`}
      </div>
      <div className={userRowStyles}>
        <span className={labelStyles}>City:</span>
        {` ${user.city}`}
      </div>
      <button className={editButtonStyles} onClick={onEditMatches}>
        Edit matches
      </button>
      <Matches defaultSelected={matches} />
    </div>
  );
};

export default Profile;
