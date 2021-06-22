import React from "react";

import { useTestHook } from "../hooks";
import { Table } from "../components";

function Home() {
  const { data } = useTestHook();

  return <Table data={data} />;
}

export default Home;
