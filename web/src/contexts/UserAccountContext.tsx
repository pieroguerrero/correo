import { createContext } from "react";
import { IUserAccount } from "../models/UserAccount";

interface IUserAccountProvider {
  userAccount: IUserAccount | null;
  children: JSX.Element;
}

const UserAccountContext = createContext<IUserAccount>({} as IUserAccount);

/**
 * Encloses the Context provider funcitonality. If the user account was defined, then it returns the Context Provider, otherwise returns the children components only.
 * @returns
 */
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
