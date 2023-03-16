import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../../../../pages/Login/Login";

describe("Landing.tsx", () => {
  it("UI layout and design are remain the same", () => {
    const { container } = render(
      <BrowserRouter>
        <Login
          setUserAccount={() => {
            return;
          }}
        />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
