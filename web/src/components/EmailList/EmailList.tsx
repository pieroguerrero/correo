import { IEmailListDTO } from "../../dtos";
import EmailItem from "./components/EmailItem";
interface IEmailList {
  emails: IEmailListDTO[];
}

/**
 * Component that render the emails.
 * @returns
 */
export function EmailList({ emails }: IEmailList) {
  const today = new Date().toString();
  return (
    <table className="w-full">
      <tbody>
        {emails.length === 0
          ? null
          : emails.map((email) => (
              <EmailItem key={email._id} email={email} today={today} />
            ))}
      </tbody>
    </table>
  );
}
