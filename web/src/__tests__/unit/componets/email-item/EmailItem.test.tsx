import { render, screen } from "@testing-library/react";
import EmailItem from "../../../../components/EmailList/components/EmailItem";
import { uniqueEmailItem } from "../../../../__mocks__/emailItemsMock";
import { parseISO, format } from "date-fns";
import "@testing-library/jest-dom";

describe("EmailItem.tsx", () => {
  it("Receive an Email element and render the data correctly", () => {
    render(
      <table>
        <tbody>
          <EmailItem
            today={new Date().toDateString()}
            email={uniqueEmailItem}
          />
        </tbody>
      </table>
    );

    expect(screen.getAllByRole("row")).toHaveLength(1);
    expect(screen.getByRole("row").childElementCount).toBe(4);
    expect(screen.getByText(uniqueEmailItem.senderName)).toBeVisible();
    expect(screen.getByText(uniqueEmailItem.subject)).toBeVisible();
    expect(
      screen.getByText("- " + uniqueEmailItem.subjectDetails)
    ).toBeVisible();
    expect(
      screen.getByText(format(parseISO(uniqueEmailItem.created), "h:mm a"))
    ).toBeVisible();
  });

  it("UI layout and design are remain the same", () => {
    const copyEmailitem = { ...uniqueEmailItem };
    copyEmailitem.created = "2023-03-15T17:10:35.961Z";
    copyEmailitem.received = "2023-03-15T17:10:35.961Z";
    const { container } = render(
      <table>
        <tbody>
          <EmailItem today={"Wed Mar 15 2023"} email={copyEmailitem} />
        </tbody>
      </table>
    );
    expect(container).toMatchSnapshot();
  });
});
