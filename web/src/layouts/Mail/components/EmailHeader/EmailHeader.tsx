import AccountOptions from "../../../../components/AccountOptions/AccountOptions";
import EmailSearch from "./components/EmailSearch";

export function EmailHeader() {
  return (
    <div className=" h-16 grid grid-cols-[256px_1fr_1fr] bg-gray-100">
      <div className="flex items-center ml-6">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail Logo"
        />
      </div>
      <EmailSearch />
      <AccountOptions />
    </div>
  );
}
