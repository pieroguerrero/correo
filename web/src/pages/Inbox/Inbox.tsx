import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserAccountContext } from "../../contexts/UserAccountContext";
import NavPaths from "../../utilities/NavPaths";
/**
 * Main email folder component.
 * @returns
 */
export function Inbox() {
  const userAccount = useContext(UserAccountContext);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(NavPaths.Base.path + NavPaths.Sent.path);
  };
  return (
    <div>
      Inbox:
      <div>{"Email: " + userAccount.email}</div>
      <button onClick={handleClick}>To sent</button>
    </div>
  );
}
