import React from "react";
import { render, waitFor } from "@testing-library/react";

import { Context } from "../../../providers";
import { Service } from "../../../providers/mock-service";
import { Home } from "../../../pages";

describe("integration-test Home page", () => {
  it("should render component", async () => {
    const { container, getByText } = render(<Home />, {
      wrapper: function Wrapper({ children }) {
        return (
          <Context.Provider value={new Service()}>{children}</Context.Provider>
        );
      },
    });

    await waitFor(() => {});

    expect(container.children).toHaveLength(1);
    expect(getByText("A")).toBeDefined();
    expect(getByText("B")).toBeDefined();
    expect(getByText("C")).toBeDefined();
  });
});
