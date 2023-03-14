import { useQuery, useQueryClient } from "react-query";
import EmailFilters from "../../components/EmailFilters/EmailFilters";
import { EmailList } from "../../components/EmailList";
import { IEmailListDTO } from "../../dtos";
import useNewEmailNotification from "../../hooks/useWebSocket";
import { listEmails } from "../../services/api-service/email-service";
import ConfigValues from "../../utilities/ConfigValues";
import { EmailTabs } from "./components/EmailTabs/EmailTabs";
/**
 * Renders thte main email folder component: the Inbox.
 * @returns
 */
export function Inbox() {
  const { isLoading, data, error } = useQuery<IEmailListDTO[]>(
    ConfigValues.ReactQueryKeys.InboxEmails,
    listEmails
  );

  const queryClient = useQueryClient();
  //Call this Hook in order to start listening for incomming emails
  useNewEmailNotification((email: IEmailListDTO) => {
    //Update the data state that React query manages.
    queryClient.setQueryData<IEmailListDTO[]>(
      ConfigValues.ReactQueryKeys.InboxEmails,
      (prev) => {
        if (!prev) return [email];
        return [email, ...prev];
      }
    );
  });
  //const navigate = useNavigate();
  //const handleClick = () => {
  // navigate(NavPaths.Base.path + NavPaths.Sent.path);
  //};
  return (
    <div className="grid h-full grid-cols-1 grid-rows-[max-content_max-content_auto]">
      <section className="  row-start-1 row-end-2">
        <EmailFilters />
      </section>
      <section className="  row-start-2 row-end-3">
        <EmailTabs />
      </section>
      <section className=" bg-white row-start-3 row-end-4">
        {(() => {
          if (isLoading) return <div>Loading...</div>;

          if (error || data === undefined)
            return <div>Error while fetching data</div>;

          return <EmailList emails={data} />;
        })()}
      </section>
    </div>
  );
}
