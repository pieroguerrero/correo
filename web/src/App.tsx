import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserAccountProvider } from "./contexts/UserAccountContext";
import { IUserAccount } from "./models/UserAccount";
import { Mail } from "./layouts/Mail/Mail";
import { Inbox } from "./pages/Inbox/Inbox";
import { Login } from "./pages/Login/Login";
import { Sent } from "./pages/Sent/Sent";
import NavPaths from "./utilities/NavPaths";
import ReactQueryProvider from "./contexts/ReactQueryContext";

//implement the protected routes with Context by wraping all the BrowserRouter in the provider
//and following the patter in this article: https://www.robinwieruch.de/react-router-private-routes/

function App() {
  const [userAccount, setUserAccount] = useState<IUserAccount | null>(null);
  return (
    <ReactQueryProvider>
      <UserAccountProvider userAccount={userAccount}>
        <BrowserRouter basename={NavPaths.Base.path}>
          <Routes>
            <Route index element={<Login setUserAccount={setUserAccount} />} />
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
  );
}

export default App;
