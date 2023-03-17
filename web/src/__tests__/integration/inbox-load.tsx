import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import ReactQueryProvider from "../../contexts/ReactQueryContext";
import { UserAccountProvider } from "../../contexts/UserAccountContext";
import Inbox from "../../pages/Inbox/Inbox";
import { emailItemsList } from "../../__mocks__/emailItemsMock";
import { useAccountMock } from "../../__mocks__/useAccountMock";

//Axios mock configuration
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Inbox.tsx full load", () => {
  it("Render multiple Email elements", async () => {
    //Mock the next Axios Get call
    mockedAxios.get.mockResolvedValue({ data: emailItemsList });

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

    //Test a static element
    screen.getByRole("button", {
      name: /primary/i,
    });

    //Wait for the API call to finish and test the list of Emails
    await waitFor(() => {
      const table = screen.getByRole("table");
      expect(table.childElementCount).toBe(1);
      //The list of Emails has a number of Emails listed
      expect(table.children[0].childElementCount).toBe(emailItemsList.length);
    });
  });
});
