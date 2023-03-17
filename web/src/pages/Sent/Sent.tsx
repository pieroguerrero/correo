import { useContext } from "react";
import { UserAccountContext } from "../../contexts/UserAccountContext";

export default function Sent() {
  const userAccount = useContext(UserAccountContext);
  return (
    <div>
      Sent:
      <div>{"Email: " + userAccount.email}</div>
    </div>
  );
}
