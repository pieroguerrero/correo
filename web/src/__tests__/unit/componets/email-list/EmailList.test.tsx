import { render, screen } from "@testing-library/react";
import { EmailList } from "../../../../components/EmailList";
import { emailItemsList } from "../../../../__mocks__/emailItemsMock";
import "@testing-library/jest-dom";

describe("EmailList.tsx", () => {
  it("Receive multiple Email elements and render them in a table element", () => {
    render(<EmailList emails={emailItemsList} />);

    const table = screen.getByRole("table");
    expect(table.childElementCount).toBe(1);
    expect(table.children[0].childElementCount).toBe(emailItemsList.length);
  });

  it("UI layout and design are remain the same", () => {
    const { container } = render(<EmailList emails={emailItemsList} />);
    expect(container).toMatchSnapshot();
  });
});
