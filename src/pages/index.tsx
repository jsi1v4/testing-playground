import React from "react";
import { NextPage } from "next";

import { useTestHook } from "../hooks";
import { Table } from "../components";

export const Home: NextPage = () => {
  const { data } = useTestHook();

  return (
    <>
      <h1>Testing Playground</h1>
      <Table data={data} />
    </>
  );
};

export default Home;
