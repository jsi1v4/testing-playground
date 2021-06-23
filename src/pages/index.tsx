import React from "react";
import { NextPage } from "next";

import { useTestHook } from "../hooks";
import { Table } from "../components";

export const Home: NextPage = () => {
  const { data } = useTestHook();

  return <Table data={data} />;
};

export default Home;
