import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAccountContext } from "../../contexts/UserAccountContext";
import NavPaths from "../../utilities/NavPaths";

export function Mail() {
  const userAccount = useContext(UserAccountContext);
  console.log({ userAccount });
  if (Object.keys(userAccount).length === 0)
    return <Navigate to={NavPaths.Login.path} replace />;
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  );
}
