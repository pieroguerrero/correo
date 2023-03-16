import { act, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import ReactQueryProvider from "../../contexts/ReactQueryContext";
import { UserAccountProvider } from "../../contexts/UserAccountContext";
import { Inbox } from "../../pages/Inbox/Inbox";
import { uniqueEmailItem } from "../../__mocks__/emailItemsMock";
import { useAccountMock } from "../../__mocks__/useAccountMock";
import ListenerService from "../../services/listener-service/ListenerService";
import { IEmailListDTO } from "../../dtos";
import "@testing-library/jest-dom";

//Mock the web-socket.io custom ListenerService module to work with this test
jest.mock("../../services/listener-service/ListenerService.ts", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => {
    let callbackEvent: null | ((newEmail: IEmailListDTO) => void) = null;
    let emailEvent: { email: string } | null = null;
    const mockListenerService = {
      on: (eventName: string, callback: (newEmail: IEmailListDTO) => void) => {
        emailEvent = { email: eventName };
        callbackEvent = callback;
      },
      emit: (eventName: string, newEmail: IEmailListDTO) => {
        if (callbackEvent && emailEvent && emailEvent.email === eventName) {
          callbackEvent(newEmail);
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      off: (_eventName: string) => {
        callbackEvent = null;
      },
    };

    return mockListenerService;
  })(),
}));

//Mock the axios module
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Inbox.tsx to receive an event ", () => {
  beforeAll(() => {
    //Mock the Axios call with an empty data array of Emails
    mockedAxios.get.mockResolvedValue({ data: [] });

    act(() => {
      //Render the component
      render(
        <ReactQueryProvider>
          <UserAccountProvider userAccount={useAccountMock}>
            <BrowserRouter>
              <Inbox />
            </BrowserRouter>
          </UserAccountProvider>
        </ReactQueryProvider>
      );
    });
  });

  it("Successfully receives a new Email via Web Socket", async () => {
    //Emit the event for an specific email address with data of a new Email
    ListenerService.emit(useAccountMock.email, uniqueEmailItem);

    //Wait for the Event to have effects
    await waitFor(() => {
      const table = screen.getByRole("table");
      expect(table.childElementCount).toBe(1);
      expect(table.children[0].childElementCount).toBe(1);

      //Verify that specific data from the received email is present in the UI
      expect(screen.getByText(uniqueEmailItem.senderName)).toBeVisible();
      expect(screen.getByText(uniqueEmailItem.subject)).toBeVisible();
    });
  });

  it("Successfully ignores the reception of a new Email for a different email account", async () => {
    //Emit the event for an specific email address with data of a new Email
    ListenerService.emit("other_" + useAccountMock.email, uniqueEmailItem);

    //Wait for the Event to have effects
    await waitFor(() => {
      //Verify that specific data from the received email is NOT present in the UI
      expect(screen.queryByRole("table")).not.toBeInTheDocument();
    });
  });
});
