import React from "react";

import { Data } from "../providers/types";

export interface TableProps {
  data?: Data[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table data-testid="id-table">
      <thead>
        <tr>
          <th>Letter</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, key) => (
          <tr key={key}>
            <td data-testid={`id-table-letter-${key}`}>{row.letter}</td>
            <td data-testid={`id-table-number-${key}`}>{row.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
