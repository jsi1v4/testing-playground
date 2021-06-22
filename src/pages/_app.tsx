import React from "react";
import type { AppProps } from "next/app";

import { TestProvider } from "../providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TestProvider>
      <Component {...pageProps} />
    </TestProvider>
  );
}

export default MyApp;
