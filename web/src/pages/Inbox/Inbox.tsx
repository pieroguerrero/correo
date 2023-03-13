import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailFilters from "../../components/EmailFilters/EmailFilters";
import { EmailList } from "../../components/EmailList";

import { UserAccountContext } from "../../contexts/UserAccountContext";
import useNewEmailNotification from "../../hooks/useWebSocket";
import { IEmail } from "../../interfaces";
import NavPaths from "../../utilities/NavPaths";
/**
 * Main email folder component.
 * @returns
 */
export function Inbox() {
  const [emails, setEmails] = useState<IEmail[]>([]);
  const userAccount = useContext(UserAccountContext);
  useNewEmailNotification((email: IEmail) => {
    setEmails((prev) => [email, ...prev]);
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(NavPaths.Base.path + NavPaths.Sent.path);
  };
  return (
    <div className="grid h-full grid-cols-[1fr_1fr] grid-rows-[max-content_auto]">
      <section className="  col-start-1 col-end-3 row-start-1 row-end-2">
        <EmailFilters />
      </section>
      <section className=" bg-white  col-start-1 col-end-2 row-start-2 row-end-3">
        <EmailList emails={emails} />
      </section>
      <section className="bg-white col-start-2 col-end-3 row-start-2 row-end-3">
        {"Reading Panel: " + userAccount.email}
      </section>
    </div>
  );
}
