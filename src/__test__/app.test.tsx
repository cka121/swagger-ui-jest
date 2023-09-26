import { render, screen } from "@testing-library/react";
import App from "../App";

describe("test App", () => {
    it("should show loading message on App load", async () => {
      render(<App />);
      const loadElement = screen.getByTestId("app");
        expect(loadElement).toBeDefined();
    });
});