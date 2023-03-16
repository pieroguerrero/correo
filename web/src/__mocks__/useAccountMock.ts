import { IUserAccount } from "../models/UserAccount";
import { emailAddress } from "./emailItemsMock";

const useAccountMock: IUserAccount = {
  name: "No Name",
  lastname: "No Last Name",
  email: emailAddress,
};

export { useAccountMock };
