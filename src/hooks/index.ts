import { useCallback, useEffect, useState } from "react";

import { useTestContext } from "../providers";
import { Data } from "../providers/types";

export function useTestHook() {
  const service = useTestContext();

  const [data, setData] = useState<Data[]>();

  const fetch = useCallback(() => {
    return service.getInfos().then(setData).catch(console.error);
  }, [service]);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
  };
}
