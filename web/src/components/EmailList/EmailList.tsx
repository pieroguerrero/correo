import { IEmail } from "../../interfaces";
import EmailItem from "./components/EmailItem";
interface IEmailList {
  emails: IEmail[];
}

/**
 * Component that render the emails.
 * @returns
 */
export function EmailList({ emails }: IEmailList) {
  //const userAccount = useContext(UserAccountContext);
  return (
    <div>
      <ul>
        {emails.length === 0
          ? null
          : emails.map((email) => <EmailItem key={email._id} email={email} />)}
      </ul>
    </div>
  );
}
