import React from "react";
import { render, waitFor } from "@testing-library/react";

import { Context } from "../../../src/providers";
import { Service } from "../../../src/providers/mock-service";
import { useTestHook } from "../../../src/hooks";

const Component = () => {
  const { data } = useTestHook();
  return (
    <>
      {data?.map((x, i) => (
        <span key={i}>{x.letter}</span>
      ))}
    </>
  );
};

describe("integration-test hooks", () => {
  it("should have data list", async () => {
    const { getByText } = render(<Component />, {
      wrapper: function Wrapper({ children }) {
        return (
          <Context.Provider value={new Service()}>{children}</Context.Provider>
        );
      },
    });

    await waitFor(() => {});

    expect(getByText("A")).toBeDefined();
    expect(getByText("B")).toBeDefined();
    expect(getByText("C")).toBeDefined();
  });
});
