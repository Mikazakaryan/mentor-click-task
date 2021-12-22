import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../api/users";
import { User } from "../types/user";
import { Dispatch } from "../store";
import { BASE_COLOR, WHITE } from "../Colors";

const tableStyles = css({ width: "50%" });
const elementStyles = css({
  border: "1px solid #dddddd",
  textAlign: "left",
  padding: 8,
});
const rootDivStyles = css({ display: "flex" });
const confirmButtonStyles = css({
  height: 40,
  marginLeft: 10,
  backgroundColor: BASE_COLOR,
  color: WHITE,
});

interface MatchesProps {
  editable?: boolean;
  defaultSelected: { [id: string]: User };
}

const Matches: FC<MatchesProps> = ({ editable, defaultSelected }) => {
  const [possibleMatches, setPossibleMatches] = useState<User[]>([]);
  const [selectedMatches, setSelectedMatches] = useState<{
    [id: string]: User;
  }>(defaultSelected);
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();

  const onSelectMatch = useCallback(
    (match: User) => {
      if (!!selectedMatches[match.id]) {
        const oldMatches = { ...selectedMatches };
        delete oldMatches[match.id];
        setSelectedMatches({ ...oldMatches });
      } else {
        setSelectedMatches((oldMatches) => ({
          ...oldMatches,
          [match.id]: match,
        }));
      }
    },
    [selectedMatches, setSelectedMatches]
  );

  useEffect(() => {
    if (editable) {
      getUsers().then(setPossibleMatches);
    } else {
      setPossibleMatches(Object.values(defaultSelected));
    }
  }, [setPossibleMatches, editable, defaultSelected]);

  const onConfirm = useCallback(() => {
    dispatch.matches.setMatches(selectedMatches);
    navigate("/profile");
  }, [navigate, dispatch, selectedMatches]);

  return (
    <div className={rootDivStyles}>
      <table className={tableStyles}>
        <thead>
          <tr>
            <th className={elementStyles}>First name</th>
            <th className={elementStyles}>Last name</th>
            <th className={elementStyles}>Email</th>
            <th className={elementStyles}>Gender</th>
            <th className={elementStyles}>Department</th>
            <th className={elementStyles}>Job title</th>
            <th className={elementStyles}>Country</th>
            <th className={elementStyles}>City</th>
            {editable ? <th className={elementStyles}></th> : null}
          </tr>
        </thead>
        <tbody>
          {possibleMatches.map((match) => (
            <tr>
              <td className={elementStyles}>{match.first_name}</td>
              <td className={elementStyles}>{match.last_name}</td>
              <td className={elementStyles}>{match.email}</td>
              <td className={elementStyles}>{match.gender}</td>
              <td className={elementStyles}>{match.department}</td>
              <td className={elementStyles}>{match["job title"]}</td>
              <td className={elementStyles}>{match.country}</td>
              <td className={elementStyles}>{match.city}</td>
              {editable ? (
                <td className={elementStyles}>
                  <input
                    disabled={
                      Object.values(selectedMatches).length > 4 &&
                      !selectedMatches[match.id || ""]
                    }
                    type="checkbox"
                    id={match.id}
                    name={match.id}
                    checked={!!selectedMatches[match.id || ""]}
                    value={match.id}
                    onClick={() => onSelectMatch(match)}
                  />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
      {editable ? (
        <button className={confirmButtonStyles} onClick={onConfirm}>
          Confirm
        </button>
      ) : null}
    </div>
  );
};

export default Matches;
