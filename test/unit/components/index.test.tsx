import React from "react";
import { render } from "@testing-library/react";

import { Table } from "../../../src/components";

const MOCK = [
  {
    letter: "A",
    number: 1,
  },
];

describe("unit-test Table component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Table data={MOCK} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { getByTestId } = render(<Table data={MOCK} />);
    expect(getByTestId("id-table").children).toHaveLength(2);
    expect(getByTestId("id-table-letter-0").innerHTML).toBe("A");
    expect(getByTestId("id-table-number-0").innerHTML).toBe("1");
  });
});
