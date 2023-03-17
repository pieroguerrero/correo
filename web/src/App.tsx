import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactQueryProvider from "./contexts/ReactQueryContext";
import { UserAccountProvider } from "./contexts/UserAccountContext";
import { Mail } from "./layouts/Mail/Mail";
import { IUserAccount } from "./models/UserAccount";
import { Login } from "./pages/Login/Login";
import NavPaths from "./utilities/NavPaths";
const Inbox = lazy(() => import("./pages/Inbox/Inbox"));
const Sent = lazy(() => import("./pages/Sent/Sent"));

function App() {
  const [userAccount, setUserAccount] = useState<IUserAccount | null>(null);
  return (
    <Suspense>
      <ReactQueryProvider>
        <UserAccountProvider userAccount={userAccount}>
          <BrowserRouter basename={NavPaths.Base.path}>
            <Routes>
              <Route
                index
                element={<Login setUserAccount={setUserAccount} />}
              />
              <Route
                path={NavPaths.Login.path}
                element={<Login setUserAccount={setUserAccount} />}
              />
              <Route element={<Mail />}>
                <Route path={NavPaths.Inbox.path} element={<Inbox />} />
                <Route path={NavPaths.Sent.path} element={<Sent />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserAccountProvider>
      </ReactQueryProvider>
    </Suspense>
  );
}

export default App;
