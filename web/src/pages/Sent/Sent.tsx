import { useContext } from "react";
import { UserAccountContext } from "../../contexts/UserAccountContext";

export function Sent() {
  const userAccount = useContext(UserAccountContext);
  return (
    <div>
      Sent:
      <div>{"Email: " + userAccount.email}</div>
    </div>
  );
}
