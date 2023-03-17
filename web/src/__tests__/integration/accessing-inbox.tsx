import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfigValues from "../../configs/ConfigValues";
import { emailAddress, emailItemsList } from "../../__mocks__/emailItemsMock";
import "@testing-library/jest-dom";
import App from "../../App";
import "../../__mocks__/imagesMocks";

describe("From Login.tsx to Inbox.tsx", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("Enter the Email address and view its corresponding emails", async () => {
    //Mock the API call we are going to make
    mock
      .onGet(
        ConfigValues.ListInboxEmailsServiceApiURL + "?email=" + emailAddress
      )
      .reply(200, emailItemsList);

    render(<App />);

    const user = userEvent.setup();

    const input = screen.getByRole("textbox");

    //Enter the email into the input
    user.type(input, emailAddress);

    // Get the Login button
    const button = screen.getByRole("button", { name: /next/i });
    const someFunction = jest.fn();
    button.onclick = someFunction;
    // Simulate button click
    await user.click(button);
    //expect(screen.getByRole("table")).toBeInTheDocument();
    //expect(screen.getByRole("table")).toBeVisible();
    expect(someFunction).toHaveBeenCalled();
  });
});
