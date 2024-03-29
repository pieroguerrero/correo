import { parseISO, format } from "date-fns";
import { IEmailListDTO } from "../../../dtos";

interface IEmailItem {
  email: IEmailListDTO;
  /**
   * String representation of the local Date. Use 'new Date().toDateString()' to get this value
   */
  today: string;
}

export default function EmailItem({ email, today }: IEmailItem) {
  return (
    <tr className="flex flex-row items-center space-x-4 py-2 px-4 max-w-full hover:bg-gray-100 border-b-[1px] border-b-gray-200">
      <td className="flex items-center">
        <input type="checkbox" />
      </td>
      <td className="flex items-center">
        <button>
          <svg
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0489 4.92705C11.3483 4.00574 12.6517 4.00574 12.9511 4.92705L14.2451 8.90983C14.379 9.32185 14.763 9.60081 15.1962 9.60081H19.3839C20.3527 9.60081 20.7554 10.8404 19.9717 11.4098L16.5838 13.8713C16.2333 14.126 16.0866 14.5773 16.2205 14.9894L17.5146 18.9721C17.8139 19.8934 16.7595 20.6596 15.9757 20.0902L12.5878 17.6287C12.2373 17.374 11.7627 17.374 11.4122 17.6287L8.02426 20.0902C7.24054 20.6596 6.18607 19.8934 6.48542 18.9721L7.7795 14.9894C7.91338 14.5773 7.76672 14.126 7.41623 13.8713L4.02827 11.4098C3.24456 10.8404 3.64734 9.60081 4.61606 9.60081H8.8038C9.23703 9.60081 9.62099 9.32185 9.75486 8.90983L11.0489 4.92705Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
          </svg>
        </button>
      </td>
      <td className="flex items-center">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 19 4.5-7L3 5h12q.5 0 .938.225.437.225.712.625L21 12l-4.35 6.15q-.275.4-.712.625Q15.5 19 15 19Zm3.65-2H15l3.55-5L15 7H6.65l3.25 5Zm3.25-5L6.65 7l3.25 5-3.25 5Z" />
          </svg>
        </button>
      </td>
      <td className="flex-1 shrink-0 flex items-center">
        <button className="flex flex-row items-center space-x-4 w-full">
          <div className="w-[200px] text-left" title={email.from}>
            <p className="text-sm font-bold ">
              {email.senderName ? email.senderName : email.from}
            </p>
          </div>
          <div className="flex flex-1 mr-7">
            <p className="text-sm font-bold">{email.subject}</p>
            {email.subjectDetails ? (
              <p className=" text-sm font-light text-gray-500">
                {" - " + email.subjectDetails}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {/* (new Date(item.data.created * 1000)).toLocaleString() */}
            <p className="text-sm font-semibold">
              {parseISO(email.created).toDateString() === today
                ? format(parseISO(email.created), "h:mm a")
                : format(parseISO(email.created), "LLL d")}
              {/* {format(parseISO(email.created), "yyyy-MM-dd")} */}
            </p>
          </div>
        </button>
      </td>
    </tr>
  );
}
