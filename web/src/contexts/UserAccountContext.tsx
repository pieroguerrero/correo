import { createContext } from "react";
import { IUserAccount } from "../entities/UserAccount";

interface IUserAccountProvider {
  userAccount: IUserAccount | null;
  children: JSX.Element;
}

const UserAccountContext = createContext<IUserAccount>({} as IUserAccount);

function UserAccountProvider({ userAccount, children }: IUserAccountProvider) {
  return (
    <>
      {!userAccount ? (
        <>{children}</>
      ) : (
        <UserAccountContext.Provider value={userAccount}>
          {children}
        </UserAccountContext.Provider>
      )}
    </>
  );
}

export { UserAccountContext, UserAccountProvider };
