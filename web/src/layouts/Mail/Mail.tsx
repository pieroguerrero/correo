import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAccountContext } from "../../contexts/UserAccountContext";
import NavPaths from "../../utilities/NavPaths";
import { EmailHeader } from "./components/EmailHeader/EmailHeader";
import EmailSideMenu from "./components/EmailSideMenu/EmailSideMenu";

/**
 * This is the main app that Gmail provides. Provides the layout structure for the Email functionality.
 * @returns
 */
export function Mail() {
  const userAccount = useContext(UserAccountContext);
  const showMenu = false;

  if (Object.keys(userAccount).length === 0)
    return <Navigate to={NavPaths.Login.path} replace />;

  return (
    <div className=" h-screen grid grid-cols-[max-content_min-content_auto] grid-rows-[64px_auto]">
      <aside className="col-start-1 col-end-2 row-start-1 row-end-3">
        <EmailSideMenu />
      </aside>
      {showMenu ? (
        <div className=" col-start-2 col-end-3 row-start-2 row-end-3 "></div>
      ) : null}
      <header className=" h-fit col-start-2 col-end-4 row-start-1 row-end-2">
        <EmailHeader />
      </header>
      <main
        className={
          (showMenu ? "col-start-3" : "col-start-2 pl-6 pr-4") +
          " col-end-4 row-start-2 row-end-3 bg-gray-100"
        }
      >
        <Outlet />
      </main>
    </div>
  );
}
